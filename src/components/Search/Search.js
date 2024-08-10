import React, { useState, useCallback } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Load options for the AsyncPaginate component
  const loadOptions = useCallback(async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      })),
    };
  }, []);

  // Handle changes in selected city
  const onChangeHandler = (selectedData) => {
    setSearchValue(selectedData);
    setInputValue(selectedData ? selectedData.label : '');
    if (onSearchChange) {
      onSearchChange(selectedData);
    }
  };

  // Handle input value changes
  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);

    if (searchValue) {
      setSearchValue((prev) => ({
        ...prev,
        label: newInputValue,
      }));
      if (onSearchChange) {
        onSearchChange({
          ...searchValue,
          label: newInputValue,
        });
      }
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for cities"
        debounceTimeout={600}
        value={searchValue}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
        isSearchable
        inputValue={inputValue}
        onInputChange={(newValue, { action }) => {
          if (action === 'input-change') {
            handleInputChange(newValue);
          }
        }}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: '1px solid #ccc', // Border color
            boxShadow: 'none', // Remove default box shadow
            '&:hover': {
              border: '1px solid #999', // Border color on hover
            },
          }),
          menu: (provided) => ({
            ...provided,
            border: '1px solid #ccc', // Border color for the menu
          }),
          menuList: (provided) => ({
            ...provided,
            padding: 0,
          }),
        }}
      />
    </div>
  );
};

export default Search;
