import styled from 'styled-components';
// import { useEffect } from "react"

const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;
    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ langs }) => {

// useEffect(() => {
//     console.log('List.js:useEffect');

//     return () => {
//         console.log('List.js:useEffect:unmount')
//     }
// })

    return (
        <Container>
            {
                langs.map((lang,index) => {
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
        </Container>
    )
}

// classの書き方
// import React from 'react';

// export class List extends React.Component {
//     render () {
//     const { title } = this.props;
//     return (
//         <div>
//             <h4>{ title }</h4>
//             <div>リストです。</div>
//         </div>
//     )
//     }
// }