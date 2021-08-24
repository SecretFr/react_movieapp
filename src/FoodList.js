import React from "react";
import PropTypes from "prop-types";

function Food(props){
    return (
        <div>
            <h3>I like {props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <p>{props.name} 의 평점 : {(props.rating / 5.0).toFixed(2)}</p>
        </div>

    );
}

//props의 type을 콘솔 로그에서 검증 가능
Food.propTypes={
    // name: PropTypes.instanceOf(Food),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function renderFood(food){
    console.log(food);
    return <Food key={food.id}
                 name={food.name}
                 image={food.image}
                 rating={food.rating}/>
}

//동적으로 데이터 전달하기
const foodILike = [
    {
        id:1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 1.2
    },
    {
        id:2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.2
    },
    {
        id:3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 3.3
    },
    {
        id:4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 5.2
    },
    {
        id:5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.6
    }
];

function FoodList(){
    return(
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}
export default FoodList;