const FriendsWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
    background: #FFFFFF;
    font-family: Montserrat;
    border-radius: 15px 15px 0px 0px;
    padding: 114px 114px 114px 91px;
    margin-top: 100px;
    position: relative;
`
//убрать маргин-топ при переводе на реальную страницу
const PageMarker = styled.h2`
    margin: 0;
    left: 90px;
    top: -91px;
    padding: 58px 77px;
    position: absolute;
    border-radius: 15px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    background: #FFB11B;
`
const Friends = (props) => {
    return (
        <FriendsWrapper>
            <PageMarker>Друзья</PageMarker>
        </FriendsWrapper>
    )
}
export default Friends;