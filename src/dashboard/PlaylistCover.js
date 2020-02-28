import React from 'react';
import styled from 'styled-components';


const StyledPlaylistCover = styled.div`
	width: 180px;
	height: 180px;
	position: relative;
	cursor: pointer;
	border-radius: 4px;
	border: 2px solid var(--gray3);
	background-image: url(${props => props.bgimg});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: center;

	:hover {
		opacity: 0.7;
	}
`
const PlaylistCoverDetails = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	color: var(--text1);
	display: flex;
	flex-direction: column;
	margin-left: 8px;
	margin-bottom: 8px;
`
const PlaylistName = styled.span`
	text-shadow: 0 1px 1px rgba(0, 0, 0, 1);
	font-size: 21px;
	font-weight: 600;
	letter-spacing: 0.2px;
	max-height: 80px;
	overflow: hidden;
	color: var(--text1);
`
const PlaylistService = styled.span`
	text-shadow: 0 1px 1px rgba(0, 0, 0, 1);
	font-size: 16px;
	font-weight: 600;
	color: #4392f1;
`


export default function PlaylistCover(props) {
	const playlist = props.playlist;


	return (
		<StyledPlaylistCover bgimg={playlist.cover} onClick={() => props.history.push(`/dashboard/playlist-${playlist.id}`)}>
			<PlaylistCoverDetails>
				<PlaylistName>
					{playlist.name}
				</PlaylistName>
				<PlaylistService>
					{playlist.service}
				</PlaylistService>
			</PlaylistCoverDetails>
		</StyledPlaylistCover>
	)
}