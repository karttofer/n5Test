// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Style
import './index.css';

// Micro
import MainHarry from 'harry/main';
import MainRick from 'rick/main';

// Languages
import common_en from './i18/en.json';
import common_es from './i18/es.json';
import { useTranslation } from 'react-i18next';

// Styled
import { Main, Select } from './library';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

const Header = () => {
  const { i18n } = useTranslation('common');

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Main>
      <Select name="select" onChange={(e) => changeLanguage(e)}>
        <Select.Option value="en">EN 🇺🇸</Select.Option>
        <Select.Option value="es">ES 🇪🇸</Select.Option>
      </Select>
    </Main>
  );
};

const App = () => {
  const { t } = useTranslation('common');
  const language = {
    welcome: {
      titleH: t('welcome.titleHarry'),
      titleR: t('welcome.titleRick'),
    },
    button: {
      text: t('card.button'),
    },
    more: {
      name: t('card.more.name'),
      specie: t('card.more.specie'),
      gender: t('card.more.gender'),
    },
  };
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <MainHarry i18={language} />
          <MainRick i18={language} />
        </div>
      </main>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App data={i18next} />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
