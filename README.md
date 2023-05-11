# aTempo eCommerce Simulator

This is a React e-commerce simulator project focused on the sale of musical instruments. The application interacts with the user from start to finish, from the homepage to the purchase confirmation page. Products are fetched from Firebase and can be searched and filtered by brand, category, price, and more. A shopping cart is available where you can add and remove products. In the checkout, there are forms where the user must fill in the necessary details to finalize the purchase. The project is fully responsive, allowing interaction with phones, tablets, and computers.

### Clonig

If you want to clone this repository, you'll first need to install the following dependencies:

- Vite
- Tailwind
- React-Router-Dom
- Firebase
- Swiper
- Sweetalert2
- Animate.css

The e-commerce products are fetched from Firebase, so you'll need to set up the following environment variables and create the .env file and assign the following to it:

- VITE_APIKEY
- VITE_AUTHDOMAIN
- VITE_PROJECTID
- VITE_STORAGEBUCKET
- VITE_MESSAGINGSENDERID
- VITE_APPID

Then, you'll need to create your own products on this site with their respective collections, documents, and fields. You can name the collection whatever you want, but I recommend that each document should be named with the ID that is in the field of that document. The name of each field in each document must be as follows:

- bestSeller
- brand
- category
- description
- discountPercentage
- discountPrice
- id
- img1
- img2
- img3
- img4
- img5
- img6
- model
- name
- newEntry
- nickname
- position
- price
- product
- quantity
- stock
- totalPurchase

After installing all the dependencies, setting up the environment variables, and creating your own products in Firebase, you can use the following command to clone this repository:

```
git clone https://github.com/Castillo-Lucas/aTempo-eCommerce-Simulator.git
```

Once you've completed the whole process, you can execute the following command to run the application on your local computer:

```
npm run dev
```

### Rendering Flow

Here's an image that represents the rendering flow:
!["renderFlow"](https://res.cloudinary.com/dthpuldpm/image/upload/v1683729021/aTempo/render_Flow_d08ehs.png)
