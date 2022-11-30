import { useState } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import KeyButton from './components/keybutton';
import './font/font.css';
import Button from './components/button';
import { BsBackspace } from 'react-icons/bs';
import { MdSpaceBar, MdDelete } from 'react-icons/md';
import { HiSwitchVertical } from 'react-icons/hi';

function App() {
  const [lang, setLang] = useState('KR');
  const [font, setFont] = useState('Teyvat');
  const [content, setContent] = useState(
    'THE FLOWER CARRIAGE ROCKED NAHIDA OPENED HER EYES'
  );
  const [order, setOrder] = useState(false);

  const onKeyClick = (value: string) => {
    setContent(content + value);
    console.log(content);
  };

  const onSpace = () => {
    setContent(content + ' ');
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
      <div style={{ paddingTop: 15, userSelect: 'none' }}>
        <h1>{lang === 'KR' ? '원신 번역기' : 'Genshin Impact Translator'}</h1>
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
        <Button onClick={() => setFont('inazumap')}>
          {lang === 'KR' ? "이나즈마('p' 추가)" : "Inazuma(+letter 'p')"}
        </Button>
        <Button onClick={() => setFont('Sumeru')}>
          {lang === 'KR' ? '수메르 우림' : 'Sumeru'}
        </Button>
        <Button onClick={() => setFont('Deshret')}>
          {lang === 'KR' ? '수메르 사막' : 'Deshret'}
        </Button>
        <Button onClick={() => setFont('Khaenriah')}>
          {lang === 'KR' ? '켄리아' : 'Khaenriah'}
        </Button>
        <Button onClick={() => setFont('Chasm')}>
          {lang === 'KR' ? '층암거연' : 'Khaenriah(Chasm var.)'}
        </Button>
      </div>

      {/* I/O */}
      <div style={order === false ? styles.orderZero : styles.orderOne}>
        <InputBox
          className='content'
          style={{ fontFamily: font, fontSize: 20 }}
          value={content}
          placeholder='content'
          onChange={(event) => {
            if (!order) setContent(event.target.value);
          }}
          readOnly={order}
        />
        <HiSwitchVertical
          style={{ display: 'grid', alignItems: 'center' }}
          size='40'
          onClick={() => {
            setOrder(!order);
          }}
        />
        <InputBox
          className='result'
          style={{ fontFamily: 'NanumGothic', fontSize: 25, fontWeight: 500 }}
          value={content}
          placeholder={lang === 'KR' ? '알파벳' : 'Alphabet'}
          onChange={(event) => {
            if (order) setContent(event.target.value);
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
        <MdSpaceBar />
      </KeyButton>
      <KeyButton onClick={() => onBackSpace()}>
        <BsBackspace />
      </KeyButton>
      <KeyButton onClick={() => setContent('')}>
        <MdDelete />
      </KeyButton>

      {/* Language & Github */}
      <div style={{ marginTop: '5%' }}>
        <Button onClick={() => setLang('KR')}>한국어</Button>
        <Button onClick={() => setLang('EN')}>English</Button>
      </div>
      <div>
        <a href='https://github.com/ramzoon/genshin-translate' target='blank'>
          <Button>Github</Button>
        </a>
      </div>
    </div>
  );
}

const styles = {
  orderZero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  } as const,
  orderOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  } as const,
};

export default App;
