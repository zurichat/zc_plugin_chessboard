import styled from "styled-components";

const Sidebar = styled.aside`
    display: flex;
	flex-direction: column;
	min-height: 100%;
	background: #fdffff;
`;

const SidebarNav = styled.nav`
    height: 7vh;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
    align-items: center;
	color: #808080;
	background-color: #00b87c;

    .navLink {

        @media only screen and (max-width: 420px) {
            
            font-size: 1.8rem!important;

        }

        > h2{
            text-decoration: none;
            color: #ffffff;
            font-weight: 600;
            transition: 0.3s all linear;
            font-size: 2rem!important;
        }
    }

    .close {
	margin-top: 0.6rem;
	font-weight: 900;
	cursor: pointer;
    
        .closeIcon  {
            :hover path{
                stroke: #d1dada !important;
            }
        }

        .closeIcon path {
            stroke: #ffffff !important;
        }
    }
`;

const Chat = styled.div `
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

    .chatContainer {
        width:100%;
        overflow-y: auto;
        font-family: 'Lato', sans-serif;
        padding: 1.5rem 2rem .5rem 1rem;
        display: flex;
        flex-direction: column;
        height: 90vh;
        justify-content: space-between;
    }
`;

const ChatWrapper = styled.div`      
    width: 100%;
    background: white;
    margin: 1rem 0;
    

    @media only screen and (max-width: 420px) {
        width:100%;
        /* overflow-y: auto; */
        font-family: 'Lato', sans-serif;
        padding: 1.5rem 1rem 1rem .5rem;  

    }

    .specHead {
        display: flex;
        align-items: start;
        
        .specAvi {
            background-color: rgb(243, 245, 212);
            border-radius: 30%;
            margin: 0 .5rem .5rem .5rem;
            height: 3rem;
            max-width: 4rem; 
        }

        .specInfo {
            display: flex;
            align-items: flex-start;
            margin: 0 .5rem;
            width: 80%;
            padding-bottom: 1.2rem;
            
            .spectatorName {
                font-size: 15px;
                font-weight: 900;
                margin-right: 1rem;
                line-height: normal;
            }

            .time-muted{
                color: gray;
                font-size: 12px;
                text-transform: uppercase;
            }
        }
    }

    .specNameTime {
        width: 100%;
        padding-left: 4.7rem;
        padding-right: 2rem;
        margin-top: -1.3rem;

        .spectatorMessage {
            font-size: 15px;
            width: 100%;
            word-wrap: break-word;
            /* line-height: 2rem; */
            font-weight: normal;
            color: rgb(63, 63, 63);
        }
    }

`;

const EmptyComment = styled.div`
    width: 100%;
    padding: 2rem;

    svg {
        width: 100%;
        text-align: center;
        height: auto;
    }

    h3 {
        font-size: 2rem;
        text-align: center;
        margin-top: 2rem;
    }

    p {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 1rem;
    }
`;

const ChatInputForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem 0 1rem 1rem;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid rgb(228, 227, 227);
    border-radius: 5px;
    position: sticky;        
    background-color: #fff;

    input {
        border: none;
        width: 100%;
        padding: .5rem 0;
        margin-bottom: 1rem;
        outline: none;
        font-size: 16px;
        color: rgb(68, 68, 68);

        ::placeholder{
            color: rgb(228, 227, 227);
            font-size: 18px;
        }
    }

    .inputIcons{
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin: .3rem 0;

                        
            .feather {
                border-right: 2px solid rgb(197, 196, 197);
                width: 3rem !important;
            }

            .submit {
        
                :hover {
                    stroke: rgb(224, 223, 224);
                    fill: white;
                    background-color:#00b87b93 ;

                    border: .5px solid #19d395;
                }
            }

            .icon-down{
                border-left: 2px solid rgb(196, 195, 196);
                width: 3rem !important;
            }

            .inputIconsleft > svg , 
            .inputIconsright > svg{
                margin-right: .8rem;
                width: 2rem;
                cursor: pointer;
                @media only screen and (max-width: 320px) {
                        width: 1rem;
                }
            }
    }

`;

const ExitBtn = styled.button `
    
    position: relative;
    bottom: 5%;
    width: inherit;
    border-radius: 4px;
    border: 0.5px solid #B8003C;
    background-color: #fff;
    color: #bb003c;

`;

export { Sidebar, SidebarNav, Chat, ChatWrapper, EmptyComment, ChatInputForm, ExitBtn };
