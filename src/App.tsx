import { useState } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import KeyButton from './components/keybutton';
import './font/font.css';
import Button from './components/button';
import { alphas } from './constants/alphas';

// icons
import {
  HiOutlineBackspace as IconBackspace,
  HiSwitchVertical as IconSwitch,
} from 'react-icons/hi';
import {
  MdSpaceBar as IconSpacebar,
  MdDelete as IconDelete,
  MdSave as IconSave,
} from 'react-icons/md';
import { onHtmltoImg } from './actions/htmlToImg';

function App() {
  const [lang, setLang] = useState('KR');
  const [font, setFont] = useState('Teyvat');
  const [content, setContent] = useState('');
  const [order, setOrder] = useState(false);

  const onKeyClick = (value: string) => {
    setContent(content + value);
  };

  const onSpace = () => {
    setContent(content + ' ');
  };

  const onBackSpace = () => {
    setContent(content.slice(0, -1));
  };

  const KeyButtonList = () => {
    const buttonList = alphas.map((alpha) => (
      <KeyButton style={{ fontFamily: font }} onClick={() => onKeyClick(alpha)}>
        {alpha}
      </KeyButton>
    ));
    return <div>{buttonList}</div>;
  };

  return (
    <div className='App'>
      <div style={{ paddingTop: 15, userSelect: 'none' }}>
        <h1>
          {lang === 'KR' ? '원파고 - 원신 번역기' : 'Genshin Impact Translator'}
        </h1>
        <h5 style={{ fontFamily: 'Teyvat' }}>Genshin Impact Translator</h5>
      </div>

      {/* selecting font */}
      <div style={{ margin: '0 1rem' }}>
        <Button onClick={() => setFont('Teyvat')}>
          {lang === 'KR' ? '티바트 공용' : 'Teyvat Common'}
        </Button>
        <Button onClick={() => setFont('Inazuma')}>
          {lang === 'KR' ? '이나즈마' : 'Inazuma'}
        </Button>
        <Button onClick={() => setFont('Sumeru')}>
          {lang === 'KR' ? '수메르 우림' : 'Sumeru'}
        </Button>
        <Button onClick={() => setFont('Deshret')}>
          {lang === 'KR' ? '수메르 사막' : 'Deshret'}
        </Button>
        <Button onClick={() => setFont('Khaenriah')}>
          {lang === 'KR' ? '고대문자 (켄리아)' : 'Ancient Runes (Khaenriah)'}
        </Button>
        <Button onClick={() => setFont('Chasm')}>
          {lang === 'KR' ? '고대문자 (층암거연)' : 'Ancient Runes (Chasm var.)'}
        </Button>
        <Button onClick={() => setFont('Fontaine')}>
          {lang === 'KR' ? '폰타인' : 'Fontaine'}
        </Button>
      </div>
      <KeyButton
        //style={{ position: 'absolute', right: '10%' }}
        style={{ marginTop: 10 }}
        onClick={onHtmltoImg}
      >
        <IconSave />
      </KeyButton>
      {/* I/O */}
      <div style={order === false ? styles.orderZero : styles.orderOne}>
        <InputBox
          id='teyvat'
          className='content'
          style={{ fontFamily: font, fontSize: 20 }}
          value={content}
          placeholder='input'
          onChange={(event: any) => {
            if (!order) setContent(event.target.value.toUpperCase());
          }}
          readOnly={order}
        />
        <KeyButton style={{ margin: 10 }}>
          <IconSwitch
            style={{ display: 'grid', alignItems: 'center' }}
            size='40'
            onClick={() => {
              setOrder(!order);
            }}
          />
        </KeyButton>
        <InputBox
          id='alpha'
          className='result'
          style={{ fontFamily: 'NanumGothic', fontSize: 25, fontWeight: 500 }}
          value={content}
          placeholder={lang === 'KR' ? '알파벳' : 'Alphabet'}
          onChange={(event) => {
            if (order) setContent(event.target.value.toUpperCase());
          }}
          readOnly={!order}
        />
      </div>

      {/* Keybutton */}
      <div style={{ margin: '0.5rem 1rem' }}>
        <KeyButtonList />
      </div>

      {/* are these necessary? */}
      <div style={{ marginTop: '10px' }}></div>
      <KeyButton onClick={() => onSpace()}>
        <IconSpacebar />
      </KeyButton>
      <KeyButton onClick={() => onBackSpace()}>
        <IconBackspace />
      </KeyButton>
      <KeyButton onClick={() => setContent('')}>
        <IconDelete />
      </KeyButton>

      {/* comment line */}
      <div style={{ marginTop: '2%' }}>
        2024.06.23 폰타인 문자가 추가되었습니다. 급하게 추가되었기 때문에 크기가
        맞지 않는 폰타인 문자의 폰트 크기는 현재 ttf 파일을 수정 중이며 곧
        조정될 예정입니다. <br />
        Fontaine script Updated. The font size of Fontaine script will be
        adjusted soon.
      </div>

      {/* Language & Github */}
      <div style={{ marginTop: '3%' }}>
        <Button onClick={() => setLang('KR')}>한국어</Button>
        <Button onClick={() => setLang('EN')}>English</Button>
      </div>
      <div>
        <a href='https://github.com/ramzoon/genshin-translate' target='blank'>
          <Button>Github</Button>
        </a>
      </div>

      {/* Hits */}
      <a href='https://hits.seeyoufarm.com'>
        <img
          style={{ marginTop: 10 }}
          src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhermes-j.github.io%2Fgenshin-translator%2F&count_bg=%2320BCFF&title_bg=%23474C59&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false'
          alt=''
        />
      </a>
    </div>
  );
}

const styles = {
  orderZero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px 0px',
  } as const,
  orderOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    margin: '10px 0px',
  } as const,
};

export default App;
