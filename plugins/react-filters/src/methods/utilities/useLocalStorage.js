import useSettingsContext from '../../context/useSettingsContext';
import useDataContext from '../../context/useDataContext';

function useLocalStorage() {
  const {userData, rememberFilters, currentPagePath} = useSettingsContext();
  const {selected, order, afterFirstEvent, currentPage} = useDataContext();

  function setLocalStorage() {
    const selectedCopy = userData && userData !== null ? userData : {};
    const values = {selected: [], order: '', page: currentPage};

    if (rememberFilters && afterFirstEvent) {
      values.selected = selected;
      values.order = order;
			values.page = currentPage;
      selectedCopy[currentPagePath] = values;
      sessionStorage.setItem('selected', JSON.stringify(selectedCopy));
    }
  }

  return {
    setLocalStorage
  }
}

export default useLocalStorage;