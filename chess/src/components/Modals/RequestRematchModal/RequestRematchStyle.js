import styled from "styled-components";

const RequestRematchContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000 !important;
    background-color: rgba(0, 0, 0, 0.7);
`;

const RequestRematchModal = styled.div`
    margin: 16vh auto;
    height: 400px;
    width: 456px; 
    z-index: 2;
    background: #FFFFFF;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 49px 35px rgba(0, 0, 0, 0.0460133),
    0px 24.8165px 16.4998px rgba(0, 0, 0, 0.034856),
    0px 13.729px 8.167px rgba(0, 0, 0, 0.0269394),
    0px 7.56423px 3.94388px rgba(0, 0, 0, 0.0201337),
    0px 3.35772px 1.53069px rgba(0, 0, 0, 0.0128302);
    display: flex;
    flex-direction: column;
    align-items: center;

    .RequestRematch__header {
        .profile {
            margin-top: 5em;
        }
    }

    .RequestRematch__content {
        font-size: 20px;
        margin: 0 auto;
        width: 70%;
        text-align: center;
        
        p{
            margin: 0;
        }
    }
`;

const RequestRematchFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    margin-top: 2.5rem;

    .RequestRematch__button {
        display: inline-block;
        background-color: transparent;
        border: 1px solid;
        border-radius: 3px;
        padding: 0;
        padding: 1.2rem 5rem; 
        font-size: 1.4rem;
        letter-spacing: 1px;

        :hover{
            opacity: 0.8;
        }

        &--Accept {
            background: rgba(39, 174, 96, 1);
            border-color: rgba(39, 174, 96, 1);
            color: #ffffff;

            :hover, 
            :focus{
                    background: transparent;
                    color: rgba(39, 174, 96, 1);  
                }   
        }
        
        &--Decline {
            color: rgba(184, 0, 60, 1);
            border-color: rgba(184, 0, 60, 1);

            
            :hover {
                    background:  rgba(184, 0, 60, 1);
                    color: #fff;  
                } 

            .RequestRematch__button--Decline,
            .RequestRematch__button--Decline:focus {
                    background:  #fff;
                    color: rgba(184, 0, 60, 1);
                } 
        }
    }
`;

export { RequestRematchContainer, RequestRematchModal, RequestRematchFooter };