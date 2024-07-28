import { useTranslation } from 'react-i18next';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Pagination = () => {
  const { data } = useLoaderData();
  console.log(data)
  const currentPage = data.data.current_page;
  const pageCount = data.data.current_page.pages_length;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex px-8 lg:px-16 gap-x-2 w-full justify-center items-center">
      <button
        className="capitalize font-normal bg-transparent font-tajawal border-none text-[#7C8893]"
        onClick={() => {
          const prevPage = currentPage - 1;
          handlePageChange(prevPage < 1 ? pageCount : prevPage);
        }}
      >
        {t('prev')}
      </button>
      {pages.map((pn) => {
        {/* console.log('pn is' + pn, 'curr' + data.current_page); */}
        return (
          <button
            key={pn}
            onClick={() => handlePageChange(pn)}
            className={`btn btn-xs  sm:btn-md border-none ${
              pn == currentPage ? 'bg-theRed text-white' : 'bg-transparent'
            }`}
          >
            {pn}
          </button>
        );
      })}
      <button
        className="capitalize font-normal font-tajawal bg-transparent border-none"
        onClick={() => {
          const nextPage = currentPage + 1;
          handlePageChange(nextPage > pageCount ? 1 : nextPage);
        }}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default Pagination;
