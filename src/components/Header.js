import React, {PureComponent} from "react";
import listIcon from "../Icons/list.svg";
import kanbanIcon from "../Icons/s-placeholder.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";

const TitleCardBlock = styled.div`
display: flex;  
flex-direction: row;
align-items: center;
color: black;
width: 300px;
`;

const ListViewButton = styled.div`
margin-left: 20px;
`

const KanbanViewButton = styled.div`
margin-left: 20px;
`

class Header extends PureComponent {
	render() {
		return (
			<div>
				<Link to="/">На главную</Link>
				<TitleCardBlock>
					<h2>Канбан-доска</h2>
					<ListViewButton>
						<img src={listIcon}/>
					</ListViewButton>
					<KanbanViewButton>
						<img src={kanbanIcon}/>
					</KanbanViewButton>
				</TitleCardBlock>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	boards: state.boards
});

export default Header;
