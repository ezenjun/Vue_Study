<template>
    <section>
        <header>My Friends</header>
        <new-friend
        @add-contact="addContact"></new-friend>
        <ul>
            <friend-contact 
              v-for="friend in friends"
              :key="friend.id"
              :id="friend.id"
              :name="friend.name" 
              :phone-number="friend.phone"
              :email-address="friend.email"
              :is-favorite="friend.isFavorite"
              
              @toggle-favorite="toggleFavoriteStatus" 
              @delete="deleteContact"> 
              <!-- emit으로 child component 읽는 방법 
              1.Component에서 emit으로 해당 emit 방식을 넘긴다 ex) @click="$emit('delete'(넘길 함수이름), id(넘길 인자))"
              2.component 상단에서 @ 넘김함수이름 = "상단에서 쓰일 method 이름"
              3.상단에 methods 정의 함수 인자에는 child에서 emit할때 넘긴 인자를 funcname(인자) 형식으로 바로 사용 가능-->
            </friend-contact>
        </ul>
    </section>
    
</template>

<script>
    export default({
        data(){
            return{
                friends:[
                    {
                        id:'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 45678 99',
                        email: "ezenju@naver.com",
						isFavorite: true
                    },
                    {
                        id:'ezenjun',
                        name: 'Peter Park',
                        phone: '010 2861 5386',
                        email: "ezenjun07@gmail.com",
						isFavorite: false
                    },
                ]
            }
        },
		methods: {
			toggleFavoriteStatus(friendId){
				const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
				identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
			},
      addContact(name, phone, email){
        const newFriendContact = {
          id: new Date().toISOString(),
          name: name,
          phone: phone,
          email: email,
          isFavorite: false
        };
        this.friends.push(newFriendContact);
      },
      deleteContact(friendId){
        this.friends = this.friends.filter(friend => friend.id !== friendId);
        //배열에서 삭제하고 싶으면 원래 기존 배열을 filter해서 다시 저장
      }
		}
    });
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app form,
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label { 
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div{
  margin: 1rem 0;
}
</style>