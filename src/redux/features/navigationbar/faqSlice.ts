import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	AboutShopify: [
		{
			id: 1,
			question: `What is Shopify?`,
			answer: [
				`Shopify is the second most popular eCommerce store builder in the world. 
          You can use Shopify in nearly every country in the world.
           It is an all-in-one ecommerce platform that helps online businesses get up and running.`,

				`If you're looking for a comprehensive ecommerce solution,Shopify is the platform for you.
           With everything from themes to payment processing included, Shopify has everything you need to get your online store up and running.`,
			],
		},
		{
			id: 2,
			question: `Are additional apps required for my Shopify store ?`,
			answer: [
				`If you're running a Shopify store, you might be wondering if you need to install 
          any additional apps to help run your business.`,

				`The answer is that it depends on your specific needs.`,

				`There are a lot of great apps out there that can help with everything from marketing to accounting, so it's definitely worth taking a look around and seeing what's available.
          However, keep in mind that not every app is right for every business, so make sure to do your research before installing anything.Lumia is the perfect theme for anyone who wants to create a shopify store without needing to worry about additional apps.
          For example, the theme includes a built-in mega menu, so you won't need to purchase a special app to get this functionality.
          Additionally, the Lumia has a built-in Instagram feed, newsletter popup, recently viewed items app and many other.`,
			],
		},
		{
			id: 3,
			question: `How to choose best theme for Shopify?`,
			answer: [
				`If you're thinking about setting up a shop on Shopify, one of the first things you'll need to do is choose a theme.
              With so many themes available, it can be tough to decide which one is right for your store. 
              Here are a few things to keep in mind when choosing a Shopify theme:`,

				`• Think about the overall tone and feel you want your store to have. 
              Do you want it to be playful and fun? Sophisticated and luxurious? Minimal and modern? 
              Your theme should reflect the overall tone and feel you want for your store.`,

				`• Consider what kind of products you'll be selling. 
              If you'll be selling mostly physical goods, you'll want a theme that includes features like product image galleries and robust product descriptions.
              If you'll be selling mostly digital goods, on the other hand, you might want a simpler theme that focuses on clean design and easy navigation.`,

				`• Think about your budget. 
              Shopify offers both free and paid themes, so you can choose something that fits within your budget. 
              Keep in mind, though, that paid themes usually offer more features and customization options than free themes.`,

				`If you're looking for a modern Shopify theme that is responsive and looks good on any device and has a lot of features, then you should definitely check Lumia Theme. 
              With its simple, clean interface Lumia makes it easy to get started.`,
			],
		},
	],

	PrePurchase: [
		{
			id: 1,
			question: `How many languages does Lumia support?`,
			answer: [
				`With Lumia Theme, you can easily start an online store in any language. 
        The theme is fully translated into all major languages, so you can use it no matter where you are in the world. 
        In addition, the admin panel is also fully translated and you can manage your store in your native language.`,
			],
		},
		{
			id: 2,
			question: `Which license type should I buy?`,
			answer: [
				`If you want to use Lumia Theme for your Shopify store, you just need to buy a regular license. 
         Read more about licenses type here:
          https://help.market.envato.com/hc/en-us/articles/115005593363-Do-I-need-a-Regular-License-or-an-Extended-License-`,
			],
		},
		{
			id: 3,
			question: `Can Lumia be used for more than one store?`,
			answer: [
				`Like all other Shopify themes on Envato Market, Lumia Theme comes with one license per domain. 
         You will need to buy a second license if you want to open a second store and use our theme.
         Each store will have its own license.`,
			],
		},
		{
			id: 4,
			question: `Could I move the theme license from my old domain to the new domain?`,
			answer: [
				`Of course, you can move the theme license to the new domain.
         You just need to send us this request by email or submit a ticket through our support system.`,
			],
		},
	],

	LumiaFeatures: [
		{
			id: 1,
			question: `How to change my theme style?`,
			answer: [
				`One of the great things about the Lumia Theme is that you can change the theme style with just one click.`,

				`This means that you can easily change the look and feel of your store without the hassle of changing the code. 
        There are over a dozen skins available in the Lumia Theme, so you can easily find one that suits your style.`,

				`Another Lumia unique feature is the ability to change styles separately for the header, footer, buttons, etc. 
        This makes it easy to customize the store to match your brand or style.`,
			],
		},
		{
			id: 2,
			question: `Has Lumia built-in “Frequently bought together” functionality?`,
			answer: [
				`If you're using Lumia Theme for your Shopify store, there's no need to buy any special apps to offer customers the option of buying products together that are frequently bought together. 
        Lumia theme includes this functionality built right in.`,

				`You need only to choose items that complement each other or that customers are likely to purchase together and add the “Frequently bought together” block in the product page admin panel.`,

				`When customers add a product to their cart that is set up as part of a group of products that are frequently bought together, 
        they'll see a message letting them know that other customers who have purchased this item have also bought certain other items. 
        They can then choose to add those items to their own cart with just a few clicks. 
        This is a great way to boost sales and encourage customers to buy more products from your store.
        
        It's also a very convenient feature for customers, who will appreciate not having to search for products that go well together.`,
			],
		},
		{
			id: 3,
			question: `Has Lumia “Subscriptions as a purchase” option?`,
			answer: [
				`Lumia Theme has a built-in subscriptions module. This means that you don't need to buy any additional apps.`,

				`Subscriptions can be a great way to encourage customers to keep coming back to your store. 
        By offering a subscription, you can provide customers with a convenient way to keep track of
         their favourite products and ensure they never run out.`,

				`So, if you're looking for an easy way to set up subscriptions, Lumia is the perfect solution.`,
			],
		},
		{
			id: 4,
			question: `Is Lumia suporting 3D models for products?`,
			answer: [
				`As ecommerce continues to grow, so too does the need for innovative product presentation.`,

				`3D product models are an excellent way to showcase your product in an interactive way. 
        By using 3D product models, you can give your customers a realistic view of your product and allow them to see it in action. 
        This is an excellent way to increase customer engagement and loyalty.`,

				`Most modern Shopify themes support 3D product models. Lumia is one of them, but it has more features. 
        With Lumia you can add 3D model for any product variant instead of image.`,
			],
		},
		{
			id: 5,
			question: `Does the AR functionality work with Lumia?`,
			answer: [
				`With AR (Augmented Reality) , you can bring your products to life and give your customers a truly unique shopping experience.`,

				`Lumia Shopify theme has a built-in AR functionality. 
        With the Lumia you can easily add AR for your products that will wow your customers and help you stand out from the competition.`,
			],
		},
	],
	Support: [
		{
			id: 1,
			question: `How to get support?`,
			answer: [
				`Do you need any help with Lumia Theme? We're here to help!`,

				`It's easy to get in touch with us - simply send us an email or submit a ticket through our support service https://big-skins.com/help/index.php.`,

				`Every support request is assigned a unique ticket number which you can use to track the progress and responses online. For your reference, we provide complete archives and a history of all your support requests.`,

				`We're always happy to help resolve any issues you may be having.`,

				`But in the meantime, be sure to check out our documentation for more information.`,
			],
		},
		{
			id: 2,
			question: `What is the schedule of the support service?`,
			answer: [
				`If you need help, our support team is available Monday-Friday 9am-7pm WET.`,

				`We'll be happy to answer any questions you have or help you with any issues you're experiencing.`,
			],
		},
		{
			id: 3,
			question: `How to send an invitation to the staff account?`,
			answer: [
				`Sending an invitation to the staff account is easy and can be done in just a few clicks. 
         can read about here: https://help.shopify.com/en/manual/your-account/staff-accounts/create-staff-accounts
        Do you want to be among the first to know`,
			],
		},
	],
};

const faqSlice = createSlice({
	name: "FAQ",
	initialState,
	reducers: {},
});

export default faqSlice.reducer;
