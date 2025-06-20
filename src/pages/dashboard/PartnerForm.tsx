import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { CSVLink } from 'react-csv';

interface Partner {
  id: number;
  name: string;
  designation: string;
  official_email: string;
  phone_number: string;
  mobile_number: string;
  industry: string;
  organization: string;
  city: string;
  state: string;
  pincode: string;
  utm_campaign_temp: string;
  utm_medium_temp: string;
  utm_source_temp: string;
  utm_content_temp: string;
  utm_term_temp: string;
  landing_page_temp: string;
  conversion_page_temp: string;
  ip_address: string;
  created_at: string;
    data_consent: boolean;
  marketing_consent:boolean;
  sponsor_sharing_consent:boolean;
}

const fetchPartners = async (): Promise<Partner[]> => {
  const token = localStorage.getItem('token') || '';
  const resp = await axios.get('https://darkorange-flamingo-563587.hostingersite.com/api/partners', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data.data;
};

const PartnerForm: React.FC = () => {
  const { data, isLoading, error } = useQuery<Partner[], Error>({
    queryKey: ['partners'],
    queryFn: fetchPartners,
  });

  const [searchInput, setSearchInput] = useState('');
  const [showUtmFields, setShowUtmFields] = useState(false);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Designation', accessor: 'designation' },
      { Header: 'Email', accessor: 'official_email' },
      { Header: 'Phone', accessor: 'phone_number' },
      { Header: 'Mobile', accessor: 'mobile_number' },
      { Header: 'Industry', accessor: 'industry' },
      { Header: 'Organization', accessor: 'organization' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Pincode', accessor: 'pincode' },
      // UTM Fields (hidden by default)
      ...(showUtmFields ? [
        { Header: 'Campaign', accessor: 'utm_campaign_temp' },
        { Header: 'Medium', accessor: 'utm_medium_temp' },
        { Header: 'Source', accessor: 'utm_source_temp' },
        { Header: 'Content', accessor: 'utm_content_temp' },
        { Header: 'Term', accessor: 'utm_term_temp' },
        { Header: 'Landing Page', accessor: 'landing_page_temp' },
        { Header: 'Conversion Page', accessor: 'conversion_page_temp' },
        { Header: 'IP Address', accessor: 'ip_address' },
      ] : []),
      
          {
          Header: 'Data Consent',
          accessor: (row: Partner) => (row.data_consent ? 'Yes' : 'No'),
          sortType: 'alphanumeric',
        },
          {
          Header: 'Marketing Consent',
          accessor: (row: Partner) => (row.marketing_consent ? 'Yes' : 'No'),
          sortType: 'alphanumeric',
        },
          {
          Header: 'Sponser Sharing Consent',
          accessor: (row: Partner) => (row.sponsor_sharing_consent ? 'Yes' : 'No'),
          sortType: 'alphanumeric',
        },
      { Header: 'Date', accessor: 'created_at' },
    ],
    [showUtmFields]
  );

  const dataTable = React.useMemo(() => data || [], [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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

  if (isLoading) return <div className="text-white">Loading partners…</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 font-orbitron">Partner List</h2>

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
            filename="partners.csv"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition"
          >
            Export CSV
          </CSVLink>
        </div>
      </div>

      {dataTable.length === 0 ? (
        <p className="text-center text-gray-400">No partners found.</p>
      ) : (
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table {...getTableProps()} className="min-w-full text-sm">
            <thead className="bg-gray-700">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="p-3 text-left font-semibold text-gray-300 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' ↓'
                              : ' ↑'
                            : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
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
                defaultValue={pageIndex + 1}
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

export default PartnerForm;