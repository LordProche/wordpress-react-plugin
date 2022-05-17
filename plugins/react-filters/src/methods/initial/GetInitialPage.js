import useSettingsContext from '../../context/useSettingsContext';

function GetInitialPage() {
  const {
    rememberFilters,
    userData,
    currentPagePath
  } = useSettingsContext();

  let initialPage;

	if (rememberFilters && userData !== null && userData[currentPagePath] && userData[currentPagePath].page !== undefined) {
    initialPage = userData[currentPagePath].page;
  }
  else {
    initialPage = 1;
  }
  
  return initialPage;
}

export default GetInitialPage;