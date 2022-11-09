import { useState } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import KeyButton from './components/keybutton';
import './font/font.css';
import { ReactComponent as GitIcon } from './icons/mark-github.svg';

function App() {
  const [lang, setLang] = useState('KR');
  const [font, setFont] = useState('Teyvat');
  const [content, setContent] = useState('');

  const onKeyClick = (value: string) => {
    setContent(content + value);
    console.log(content);
  };

  const onBackSpace = () => {
    setContent(content.slice(0, -1));
  };

  const KeyButtonList = () => {
    const alphas = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const buttonList = alphas.map((alpha) => (
      <KeyButton style={{ fontFamily: font }} onClick={() => onKeyClick(alpha)}>
        {alpha}
      </KeyButton>
    ));
    return <div>{buttonList}</div>;
  };

  return (
    <div className='App'>
      <div style={{ paddingTop: 15 }}>
        <h1>{lang === 'KR' ? '원신 번역기' : 'Genshin Impact Translator'}</h1>
        <h5 style={{ fontFamily: 'Teyvat' }}>Genshin Impact Translator</h5>
      </div>
      <div>
        <InputBox
          className='content'
          style={{ fontFamily: font, fontSize: 20 }}
          value={content}
          placeholder='INPUT'
        />
        <InputBox
          className='result'
          style={{ fontFamily: 'NanumGothic', fontSize: 25 }}
          value={content}
          placeholder={lang === 'KR' ? '결과' : 'Result'}
        />
      </div>
      <KeyButtonList />
      <div style={{ marginTop: '10px' }}></div>
      <button onClick={() => onBackSpace()}>
        {lang === 'KR' ? '지우기' : 'Backspace'}
      </button>
      <button onClick={() => setContent('')}>
        {lang === 'KR' ? '리셋' : 'reset'}
      </button>

      <div style={{ marginTop: '5%' }}>
        <button onClick={() => setFont('Teyvat')}>{lang === 'KR' ? '티바트 공용' : 'Teyvat Common'}</button>
        <button onClick={() => setFont('Inazuma')}>{lang === 'KR' ? '이나즈마' : 'Inazuma'}</button>
        <button onClick={() => setFont('Sumeru')}>{lang === 'KR' ? '수메르 우림' : 'Sumeru'}</button>
        <button onClick={() => setFont('Deshret')}>{lang === 'KR' ? '수메르 사막' : 'Deshret'}</button>
        <button onClick={() => setFont('Khaenriah')}>{lang === 'KR' ? '켄리아' : 'Khaenriah'}</button>
        <button onClick={() => setFont('Chasm')}>{lang === 'KR' ? '층암거연' : 'Khaenriah(Chasm var.)'}</button>
      </div>
      {/* Language & Github */}
      <div style={{ marginTop: '5%' }}>
        <button onClick={() => setLang('KR')}>Korean</button>
        <button onClick={() => setLang('EN')}>English</button>
        <a href='https://github.com/ramzoon/genshin-translate' target='blank'>
          <GitIcon width={40} height={40} fill={'black'} />
        </a>
      </div>
    </div>
  );
}

export default App;
