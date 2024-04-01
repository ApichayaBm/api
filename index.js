const express = require('express')
//import  express from 'express';
const app = express()
const PORT = 8080;

app.use(express.json());

const foods = [
        {
            "name": "หมูทอดกระเทียม",
            "eng_name": "Pork Garlic Stir Fried",
            "price": "45",
            "image": "https://media.lul.la/wp-content/uploads/2022/11/15170427/rice-with-stir-fried-pork-with-garlic-featured-1.jpg "
          },
          {
            "name":  "ข้าวผัดกระเพราหมู",
            "eng_name": "Fired rice with basil and pork",
            "price": "45",
            "image": "https://www.sgethai.com/wp-content/uploads/2023/05/AnyConv.com__86-3.webp"
          },
          {
            "name":  "ข้าวมันไก่",
            "eng_name": "Chicken Rice",
            "price": "50",
            "image": "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MvAZOQmFYm5g8Akcteb0xDPiuoNHv2rLoCibLWV6bwymaw2TAQ.jpg"
          },
          {
            "name":  "ผัดผักบุ้ง",
            "eng_name": "Stir Fried Swamp Cabbage",
            "price": "50",
            "image": "https://img.wongnai.com/p/1920x0/2018/10/16/730182b2db7040f5ba214b282ed434ea.jpg"
          },
          {
            "name":  "แกงจืดเต้าหู้หมูสับ",
            "eng_name": "Clear Soup with Bean Curd and Minced Pork",
            "price": "40",
            "image": "https://"
          },
          {
            "name":  "ผัดไท",
            "eng_name": "Pad Thai",
            "price": "50",
            "image": "https://www.thipkitchen.com/images/course/padthai/img1.jpg"
          },
          {
            "name":  "ต้มยำกุ้ง",
            "eng_name": "Hot and Sour Prawn Soup",
            "price": "60",
            "image": "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/04/24/5608757681874e1ea5df1aa41d5b2e3d_How_To_Make_Tom_Yam_Kung_The_Epitome_Of_Delicious_And_Nutritious_Thai_Cuisine3.jpg"
          },
          {
            "name":  "ข้าวต้มปลา",
            "eng_name": "Porridge with fish",
            "price": "50",
            "image": "https://www.taokaecafe.com/asp-bin/pic_taokae/sl_180.jpg"
          },
          {
            "name":  "ยำปลาดุกฟู",
            "eng_name": "Spicy deep-fried catfish salad",
            "price": "50",
            "image": "https://food.mthai.com/app/uploads/2017/05/Crispy-catfish-salad.jpg"
          },
          {
            "name":  "ทอดมันปลากราย",
            "eng_name": "Curried fish cake",
            "price": "60",
            "image": "https://img-global.cpcdn.com/recipes/458088971f263f69/1200x630cq70/photo.jpg"
          },
          {
            "name":  "ข้าวผัดหมู",
            "eng_name": "Fired rice with pork",
            "price": "45",
            "image": "https://assets.unileversolutions.com/recipes-v2/242153.jpg"
          },
          {
            "name":  "น้ำพริกอ่อง",
            "eng_name": "Spicy meat and tomato dip",
            "price": "40",
            "image": "https://clubthaifood.com/wp-content/uploads/2023/10/AnyConv.com__%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%A1%E0%B8%B9.webp"
          },
          {
            "name":  "ขนมจีนน้ำยา",
            "eng_name": "Rice noodles in fish curry sauce with vegetables",
            "price": "50",
            "image": "https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg"
          },
          {
            "name":  "ข้าวขาหมู",
            "eng_name": "BBQ pork Rice",
            "price": "60",
            "image": "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/03/stewed-pork-leg-on-rice-c.jpg"
          }
        ]

app.get('/food', function (req, res) {
    res.status(200).json(foods);
})
//app.listen(PORT, () => console.log('Server is running...'));

// app.get('/test', function (req, res) {
//     res.send({
//         firstName: 'Apichaya',
//         lastName: 'Thassamalee',
//     });
// });

app.listen(3000);
// const express = require('express');
// const app = express();
// const PORT = 8080;

// app.use(express.json());

// // JSON data
// const foods = [
//   {
//     "name": "หมูทอดกระเทียม",
//     "eng_name": "Pork Garlic Stir Fried",
//     "price": "45",
//     "image": "https://media.lul.la/wp-content/uploads/2022/11/15170427/rice-with-stir-fried-pork-with-garlic-featured-1.jpg "
//   },
//   {
//     "name":  "ข้าวผัดกระเพราหมู",
//     "eng_name": "Fired rice with basil and pork",
//     "price": "45",
//     "image": "https://www.sgethai.com/wp-content/uploads/2023/05/AnyConv.com__86-3.webp"
//   },
//   {
//     "name":  "ข้าวมันไก่",
//     "eng_name": "Chicken Rice",
//     "price": "50",
//     "image": "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MvAZOQmFYm5g8Akcteb0xDPiuoNHv2rLoCibLWV6bwymaw2TAQ.jpg"
//   },
//   {
//     "name":  "ผัดผักบุ้ง",
//     "eng_name": "Stir Fried Swamp Cabbage",
//     "price": "50",
//     "image": "https://img.wongnai.com/p/1920x0/2018/10/16/730182b2db7040f5ba214b282ed434ea.jpg"
//   },
//   {
//     "name":  "แกงจืดเต้าหู้หมูสับ",
//     "eng_name": "Clear Soup with Bean Curd and Minced Pork",
//     "price": "40",
//     "image": "https://"
//   },
//   {
//     "name":  "ผัดไท",
//     "eng_name": "Pad Thai",
//     "price": "50",
//     "image": "https://www.thipkitchen.com/images/course/padthai/img1.jpg"
//   },
//   {
//     "name":  "ต้มยำกุ้ง",
//     "eng_name": "Hot and Sour Prawn Soup",
//     "price": "60",
//     "image": "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/04/24/5608757681874e1ea5df1aa41d5b2e3d_How_To_Make_Tom_Yam_Kung_The_Epitome_Of_Delicious_And_Nutritious_Thai_Cuisine3.jpg"
//   },
//   {
//     "name":  "ข้าวต้มปลา",
//     "eng_name": "Porridge with fish",
//     "price": "50",
//     "image": "https://www.taokaecafe.com/asp-bin/pic_taokae/sl_180.jpg"
//   },
//   {
//     "name":  "ยำปลาดุกฟู",
//     "eng_name": "Spicy deep-fried catfish salad",
//     "price": "50",
//     "image": "https://food.mthai.com/app/uploads/2017/05/Crispy-catfish-salad.jpg"
//   },
//   {
//     "name":  "ทอดมันปลากราย",
//     "eng_name": "Curried fish cake",
//     "price": "60",
//     "image": "https://img-global.cpcdn.com/recipes/458088971f263f69/1200x630cq70/photo.jpg"
//   },
//   {
//     "name":  "ข้าวผัดหมู",
//     "eng_name": "Fired rice with pork",
//     "price": "45",
//     "image": "https://"
//   },
//   {
//     "name":  "น้ำพริกอ่อง",
//     "eng_name": "Spicy meat and tomato dip",
//     "price": "40",
//     "image": "https://clubthaifood.com/wp-content/uploads/2023/10/AnyConv.com__%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%A1%E0%B8%B9.webp"
//   },
//   {
//     "name":  "ขนมจีนน้ำยา",
//     "eng_name": "Rice noodles in fish curry sauce with vegetables",
//     "price": "50",
//     "image": "https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg"
//   },
//   {
//     "name":  "ข้าวขาหมู",
//     "eng_name": "BBQ pork Rice",
//     "price": "60",
//     "image": "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/03/stewed-pork-leg-on-rice-c.jpg"
//   }
// ]

// app.get('/food',(req, res) => {
//    res.status(200).json(foods);
// })

// app.listen(PORT, () => console.log('Server is running...'));
