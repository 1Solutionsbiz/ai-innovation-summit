import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { CSVLink } from 'react-csv';

interface Registration {
  id: number;
  name: string;
  designation: string | null;
  company: string | null;
  industry: string | null;
  employee_size: string | null;
  contact_number: string | null;
  official_email: string | null;
  personal_email: string | null;
  city: string | null;
  pincode: string | null;
  terms_accepted: boolean;
  details_disclosure: boolean;
  utm_campaign_temp: string | null;
  utm_medium_temp: string | null;
  utm_source_temp: string | null;
  utm_content_temp: string | null;
  utm_term_temp: string | null;
  landing_page_temp: string | null;
  conversion_page_temp: string | null;
  ip_address: string | null;
  created_at: string;
}

const fetchRegistrations = async (): Promise<Registration[]> => {
  const token = localStorage.getItem('token') || '';
  const resp = await axios.get('https://darkorange-flamingo-563587.hostingersite.com/api/registration', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data.data;
};

const RegistrationForm: React.FC = () => {
  const { data, isLoading, error } = useQuery<Registration[], Error>({
    queryKey: ['registrations'],
    queryFn: fetchRegistrations,
  });

  const [searchInput, setSearchInput] = useState('');
  const [showUtmFields, setShowUtmFields] = useState(false);

  // Memoize data to prevent unnecessary re-renders
  const dataTable = useMemo(() => data || [], [data]);

  // Define columns with sorting configuration
  const columns = useMemo(
    () => {
      const baseColumns = [
        { Header: 'ID', accessor: 'id', sortType: 'basic' },
        { Header: 'Name', accessor: 'name', sortType: 'alphanumeric' },
        { Header: 'Designation', accessor: 'designation', sortType: 'alphanumeric' },
        { Header: 'Company', accessor: 'company', sortType: 'alphanumeric' },
        { Header: 'Industry', accessor: 'industry', sortType: 'alphanumeric' },
        { Header: 'Employee Size', accessor: 'employee_size', sortType: 'alphanumeric' },
        { Header: 'Contact Number', accessor: 'contact_number', sortType: 'alphanumeric' },
        { Header: 'Official Email', accessor: 'official_email', sortType: 'alphanumeric' },
        { Header: 'Personal Email', accessor: 'personal_email', sortType: 'alphanumeric' },
        { Header: 'City', accessor: 'city', sortType: 'alphanumeric' },
        { Header: 'Pincode', accessor: 'pincode', sortType: 'alphanumeric' },
        {
          Header: 'Terms Accepted',
          accessor: (row: Registration) => (row.terms_accepted ? 'Yes' : 'No'),
          sortType: 'alphanumeric',
        },
        {
          Header: 'Details Disclosure',
          accessor: (row: Registration) => (row.details_disclosure ? 'Yes' : 'No'),
          sortType: 'alphanumeric',
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
            { Header: 'Campaign', accessor: 'utm_campaign_temp', sortType: 'alphanumeric' },
            { Header: 'Medium', accessor: 'utm_medium_temp', sortType: 'alphanumeric' },
            { Header: 'Source', accessor: 'utm_source_temp', sortType: 'alphanumeric' },
            { Header: 'Content', accessor: 'utm_content_temp', sortType: 'alphanumeric' },
            { Header: 'Term', accessor: 'utm_term_temp', sortType: 'alphanumeric' },
            { Header: 'Landing Page', accessor: 'landing_page_temp', sortType: 'alphanumeric' },
            { Header: 'Conversion Page', accessor: 'conversion_page_temp', sortType: 'alphanumeric' },
            { Header: 'IP Address', accessor: 'ip_address', sortType: 'alphanumeric' },
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
    page, // Use `page` instead of `rows` for pagination
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
    const value = e.target.value || undefined;
    setSearchInput(value || '');
    setGlobalFilter(value);
  };

  if (isLoading) return <div className="text-white">Loading registrations…</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 font-orbitron">Registration List</h2>

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
            filename="registrations.csv"
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

          {/* Pagination */}
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

export default RegistrationForm;