import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div id="error-page">
            <h1>Oops! 🤦🏻‍♂️</h1>
            <p>Sorry, an unexpected error has occurred. 🙁</p>
            <br />
            <figure>
                ___________________________<br />
                ________$$$$$$$$$$________<br />
                _____d$$$$$$$$$$$$$b______<br />
                _____$$$$$$$$$$$$$$$$_____<br />
                ____4$$$$$$$$$$$$$$$$F____<br />
                ____4$$$$$$$$$$$$$$$$F____<br />
                ____$$$$"_"$$$$"_"$$$$_____<br />
                _____$$F___4$$F___4$$_____<br />
                _____´$F___4$$F___4$"._____<br />
                ______$$___$$$$___$P______<br />
                ______4$$$$$"^$$$$$%_____<br />
                _______$$$$F__4$$$$_______<br />
                ________"$$$ee$$$"________<br />
                ________._*$$$$F4_________<br />
                _________$_____.$_________<br />
                _________"$$$$$$"_________<br />
                __________^$$$$___________<br />
                _4$$c_______""_______.$$r_<br />
                _^$$$b______________e$$$"_<br />
                _d$$$$$e__________z$$$$$b_<br />
                4$$$*$$$$$c____.$$$$$*$$$r<br />
                _""____^*$$$be$$$*"____^"_<br />
                __________"$$$$"__________<br />
                ________.d$$P$$$b_________<br />
                _______d$$P___^$$$b_______<br />
                ___.ed$$$"______"$$$be.___<br />
                _$$$$$$P__________*$$$$$$_<br />
                4$$$$$P____________$$$$$$"<br />
                _"*$$$"____________^$$P___<br />
                ____""______________^"____<br />
                __________________________<br /></figure>
            <Link className={""} to="/countries">
                {" "}GO HOME{" "}
            </Link>
        </div>
    );
}
