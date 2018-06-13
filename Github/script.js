const app = new Vue({
    el: '#app',
    data: {
        username: '',
        login: "",
       
    },
    methods: {
        search() {
            if (this.username.length > 0) {
                const apiUrl = 'https://api.github.com/users/' + this.username;
                
                function getSrc() {
                    return axios.get(apiUrl).then(response => {
                        return response.data.login;
                    
                    
                    
                    
                }, function(err) {
                    console.log(err);
                });
            }
            getSrc()
                .then(data => {
                    this.login = data;
            });
        }
            else {
                // show validation
            }
        
        },

    }
});

