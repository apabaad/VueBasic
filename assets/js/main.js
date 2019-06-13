Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},

	template: `
		
			<div class="row">
			<div class="col-4">
				
				<img v-bind:src='image' class="rounded img-fluid" alt="Responsive image">
				 <a :href='zoom'> Click here to zoom. </a>
			</div>

			<div class="col-8">
				<h2>{{title}}</h2>
				<button class="btn btn-primary btn-sm" v-if="inStock > 10">In Stock</button>
				<button class="btn btn-danger btn-sm" v-else-if="inStock < 10 && inStock >0">Selling fast</button>
				<button class="btn btn-danger btn-sm" v-else>Out of Stock</button><br>
				
				<p>User is premium {{premium}}</p>
				Features:
				<ul>
					<li v-for="detail in details">{{detail}}</li>
				</ul>
				
				Available variants:
				
				<div v-for="(item, index) in items"
				class="color-box" 
				v-bind:style ="{backgroundColor: item.itemColor}" 
				@mouseover="updateItem(index)">
				</div>
				
				<button class="btn btn-primary btn-sm" v-on:click="addToCart">Add to Cart </button>
			</div>
			</div>
		`,

	data(){
		return {
		category: 'Fruit',
		best: 'Mango',
		why: 'Mangoes are very tasty and are rich in vitamins and minerals.',
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
		}
	},

	methods: {
		addToCart(){
			// this.cart +=1 #used before moving cart as independent object
			this.$emit('add-to-cart') //its shorthand '@add-to-cart' is used as html element.
		},

		updateItem(index){
			this.selected = index

		}
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
		}
	}
})

var fruit = new Vue({
	el: '#fruit',
	
	data: {
		premium: true,
		cart: 0,
	},
	

	methods: {
		updateCart(){
			this.cart +=1
		},

	}

})

