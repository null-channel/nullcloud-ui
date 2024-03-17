import { computed, ref } from "vue";

export function useTableHandler<T>(data: T[]) {
  const currentPage = ref(1);
  const pageSize = ref(10);
  const filters = ref<any>({});
  function setFilterData(key: string, filterFunc: any) {
    console.log(filterFunc);

    filters.value[key] = filterFunc;
  }
  function removeFilterData(key: string) {
    delete filters.value[key];
  }
  function goToPage(pageNumber: number) {
    currentPage.value = pageNumber;
  }

  function setPageSize(size: number) {
    currentPage.value = 1;
    pageSize.value = size;
  }
  function getPageSize() {
    return pageSize.value;
  }
  function paginate() {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    let filteredData = [...data];
    Object.values(filters.value).forEach((filterFunc: any) => {
      filteredData = filteredData.filter(filterFunc);
    });
    return {
      totalLength: filteredData.length,
      currentLength: start + filteredData.slice(start, end).length,
      data: filteredData.slice(start, end),
      pageCount: Math.round(filteredData.length / pageSize.value),
    };
  }
  const setPageIndex = (value: number) => {
    currentPage.value = value + 1;
  };
  const previousPage = () => {
    currentPage.value--;
  };
  const nextPage = () => {
    currentPage.value++;
  };
  const pageCount = computed(() => paginate().pageCount);
  const totalDataLength = computed(() => paginate().totalLength);
  const currentDataLength = computed(() => paginate().currentLength);
  const paginatedData = computed(() => paginate().data);
  const canPreviousPage = () => currentPage.value > 1;
  const canNextPage = () => currentPage.value < pageCount.value;

  return {
    setFilterData,
    removeFilterData,
    getPageSize,
    canNextPage,
    setPageIndex,
    previousPage,
    nextPage,
    canPreviousPage,
    totalDataLength,
    currentDataLength,
    currentPage,
    pageSize,
    setPageSize,
    goToPage,
    paginatedData,
    pageCount,
  };
}
