import useSettingsContext from "../../context/useSettingsContext";

function useFieldsParameter() {
	const {fields} = useSettingsContext();

	const fieldsParameter = function() {
    const postString = fields ? `&_fields=${fields}` : '';
    return postString;
  }

  return {
    fieldsParameter
  }
}

export default useFieldsParameter;