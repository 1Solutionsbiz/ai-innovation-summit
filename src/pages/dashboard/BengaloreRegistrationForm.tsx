import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { CSVLink } from 'react-csv';
import debounce from 'lodash/debounce';

// Updated interface to match API response
interface BengaloreRegistration {
  id: number;
  name: string;
  designation: string | null;
  official_email: string | null;
  phone_number: string | null;
  industry: string | null;
  organization: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  utm_campaign_temp: string | null;
  utm_medium_temp: string | null;
  utm_source_temp: string | null;
  utm_content_temp: string | null;
  utm_term_temp: string | null;
  landing_page_temp: string | null;
  conversion_page_temp: string | null;
  ip_address: string | null;
  created_at: string;
  updated_at: string;
  age_acknowledged: boolean;
  data_consent: boolean;
  marketing_consent: boolean;
  sponsor_sharing_consent: boolean;
}

const fetchRegistrations = async (): Promise<BengaloreRegistration[]> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Authentication token is missing. Please log in.');

  try {
    const resp = await axios.get('https://olive-elk-842602.hostingersite.com/api/bangalore-registers', {
      headers: { Authorization: `Bearer ${token}` },
    });
    //    const resp = await axios.get('http://127.0.0.1:8000/api/bangalore-registers', {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    return resp.data.data || [];
  } catch (error) {
    throw new Error('Failed to fetch registrations. Please try again later.');
  }
};

const BengaloreRegistrationForm: React.FC = () => {
  const { data, isLoading, error } = useQuery<BengaloreRegistration[], Error>({
    queryKey: ['registrations'],
    queryFn: fetchRegistrations,
    retry: 1, // Limit retries for failed requests
  });

  const [searchInput, setSearchInput] = useState('');
  const [showUtmFields, setShowUtmFields] = useState(false);

  // Memoize data to prevent unnecessary re-renders
  const dataTable = useMemo(() => data || [], [data]);

  // Debounced search handler
  const debouncedSetGlobalFilter = useMemo(
    () => debounce((value: string | undefined, setGlobalFilter: (value: string | undefined) => void) => {
      setGlobalFilter(value);
    }, 300),
    []
  );

  // Define columns with sorting configuration
  const columns = useMemo(
    () => {
      const baseColumns = [
        { Header: 'ID', accessor: 'id', sortType: 'basic' },
        { Header: 'Name', accessor: 'name', sortType: 'alphanumeric' },
        { Header: 'Designation', accessor: 'designation', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'Organization', accessor: 'organization', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'Industry', accessor: 'industry', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'Phone Number', accessor: 'phone_number', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        // { Header: 'Mobile Number', accessor: 'mobile_number', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'Official Email', accessor: 'official_email', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'City', accessor: 'city', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'State', accessor: 'state', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        { Header: 'Pincode', accessor: 'pincode', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
         {
          Header: 'Age Acknowledge',
          accessor: 'age_acknowledged',
          Cell: ({ value }: { value: boolean }) => value ? 'Yes' : 'No',
          width: 100
        },
        {
          Header: 'Data Consent',
          accessor: 'data_consent',
          Cell: ({ value }: { value: boolean }) => value ? 'Yes' : 'No',
          width: 100
        },
        {
          Header: 'Marketing Consent',
          accessor: 'marketing_consent',
          Cell: ({ value }: { value: boolean }) => value ? 'Yes' : 'No',
          width: 120
        },
        {
          Header: 'Sponsor Sharing',
          accessor: 'sponsor_sharing_consent',
          Cell: ({ value }: { value: boolean }) => value ? 'Yes' : 'No',
          width: 130
        },
        {
          Header: 'Created At',
          accessor: 'created_at',
          sortType: (rowA: any, rowB: any, columnId: string) => {
            const a = rowA.values[columnId] ? new Date(rowA.values[columnId]).getTime() : 0;
            const b = rowB.values[columnId] ? new Date(rowB.values[columnId]).getTime() : 0;
            return a > b ? 1 : a < b ? -1 : 0;
          },
          Cell: ({ value }: { value: string }) => new Date(value).toLocaleString() || 'N/A',
        },
      ];

      const utmColumns = showUtmFields
        ? [
          { Header: 'Campaign', accessor: 'utm_campaign_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Medium', accessor: 'utm_medium_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Source', accessor: 'utm_source_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Content', accessor: 'utm_content_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Term', accessor: 'utm_term_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Landing Page', accessor: 'landing_page_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'Conversion Page', accessor: 'conversion_page_temp', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
          { Header: 'IP Address', accessor: 'ip_address', sortType: 'alphanumeric', Cell: ({ value }: { value: string | null }) => value || 'N/A' },
        ]
        : [];

      return [...baseColumns, ...utmColumns];
    },
    [showUtmFields]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: dataTable,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setSearchInput(value);
    debouncedSetGlobalFilter(value, setGlobalFilter);
  };

  if (isLoading) return <div className="text-white">Loading registrations…</div>;
  if (error) return (
    <div className="text-red-500">
      Error: {error.message}
      {error.message.includes('token') && (
        <div>
          <a href="/login" className="text-blue-400 underline">Log in again</a>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 font-orbitron">Bengaluru Registration List</h2>

      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search all columns..."
            className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setShowUtmFields(!showUtmFields)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
          >
            {showUtmFields ? 'Hide UTM Fields' : 'Show UTM Fields'}
          </button>

          <CSVLink
            data={dataTable}
            headers={columns.map(col => ({ label: col.Header, key: col.accessor as string }))}
            filename="bangalore-registrations.csv"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition"
          >
            Export CSV
          </CSVLink>
        </div>
      </div>

      {dataTable.length === 0 ? (
        <p className="text-center text-gray-400">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table {...getTableProps()} className="min-w-full text-sm">
            <thead className="bg-gray-700">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="p-3 text-left font-semibold text-gray-300 uppercase tracking-wider cursor-pointer"
                    >
                      <div className="flex items-center">
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' ↓'
                              : ' ↑'
                            : ' ↕'}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b border-gray-700 hover:bg-gray-700 transition">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="p-3 text-gray-400">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
            <div className="flex gap-2">
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className="px-3 py-1 border border-gray-700 rounded disabled:opacity-50 hover:bg-gray-700"
              >
                {'<<'}
              </button>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="px-3 py-1 border border-gray-700 rounded disabled:opacity-50 hover:bg-gray-700"
              >
                {'<'}
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="px-3 py-1 border border-gray-700 rounded disabled:opacity-50 hover:bg-gray-700"
              >
                {'>'}
              </button>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="px-3 py-1 border border-gray-700 rounded disabled:opacity-50 hover:bg-gray-700"
              >
                {'>>'}
              </button>
            </div>

            <div>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </div>

            <div className="flex gap-2 items-center">
              <span>Go to page:</span>
              <input
                type="number"
                min="1"
                max={pageCount}
                value={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                className="w-16 p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
                className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[10, 20, 30, 40, 50].map(size => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BengaloreRegistrationForm;