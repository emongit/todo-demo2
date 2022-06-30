import styled from 'styled-components';
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

function App() {
    // const [description, setDescription] = useState('クリック前の表示');
    const [tab, setTab] = useState('list');
    const [langs, setLangs] = useState([]);

    useEffect(() => {
      console.log('App.js:useEffect');
      fetchLanguages();
    }, [])

    const fetchLanguages = async () => {
      const languages = await getLanguages();
      setLangs(languages);
    }

    const addLang = (lang) => {
      // console.log(lang);
      setLangs([...langs, lang]);
      setTab('list');
    }

    // const changeDescription = () => {
    //   setDescription('クリック後の表示です。');
    // }
    return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>商品一覧</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>新規入力</HeaderLi>
        </HeaderUl>
      </Header>
      

      {/* {  description } */}
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang} />
      }
      {/* <button onClick={changeDescription}>ボタン</button> */}
    </div>
  );
}

export default App;



//　classの書き方の場合
// import React from 'react';
// import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
// import { List } from "./List";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { description: 'クリック前の表示'}
//   }

//   changeDescription() {
//     this.setState( {
//       description: 'クリック後の表示'
//     })
//   }

//   render() {
//     const { description } = this.state;
//     return (
//       <div>
//         { description }
//         <List title="取り扱い言語一覧" />
//         <button onClick={() => this.changeDescription()}>ボタン</button>
//       </div>
//     )
//   }
// }

// export default App;
