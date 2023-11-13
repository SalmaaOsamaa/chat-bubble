import React from 'react';
import classes from './languagebox.module.css'
export default function LanguageBox({ changeLanguage }) {
    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
      };
  return (
    <div>
        <div className={classes.dropdowncontainer}>
      <label htmlFor="languageselect" className={classes.dropdownlabel}>Choose a language:</label>
      <select id="language-select" name="languages" defaultValue="" className={classes.languageselect} onChange={handleLanguageChange}>
        <option value="en">🇺🇸 English</option>
        <option value="ar">🇸🇦 Arabic</option>
      </select>
    </div>
    </div>
  );
}
