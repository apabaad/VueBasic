
var fruit = new Vue({
	el: '#fruit',
	
	data: {
		category: 'Fruit',
		best: 'Mango',
		why: 'Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals. Mangoes are very tasty and are rich in vitamins and minerals',
		// image: './assets/green-mango.jpg',
		zoom: '#',
		selected: 0,
		details: [
			'Get 1KG for free on each 5KG purchase.',
			'Fresh from Baglung.',
			'Sarlakkai organic.'],
		items: [
			{	
				itemID: 1, 
				itemType: 'Kaacho',
				itemImage: './assets/green-mango.jpg',
				itemColor: 'green',
				amount : 0
			},
			
			{
				itemID: 2,
				itemType: 'Paakeko',
				itemImage: './assets/yellow-mango.jpg',
				itemColor: 'yellow',
				amount : 100

			}],

		cart: 0,
	},

	methods: {
		addToCart(){
			this.cart +=1
		},

		updateItem(index){
			this.selected = index
			console.log(index)

		},
	},

	computed: {
		title(){
			return this.best + ' ' + this.category
		},
		image(){
			return this.items[this.selected].itemImage
		},
		inStock(){
			return this.items[this.selected].amount
		},

	}

})