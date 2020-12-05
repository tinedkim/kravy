const apiKey = "wYNGtBGX82X0-G0dtbgz8UlwPVZijx6vfuozdsOuw9wwPGtP6elcM9aXk7Cnfj41ffQpr0iYB4tsow4B0yMAOITg-BTZK58swlTqiDGLKX6vSXvZ_c07BxUkohfIX3Yx";

const Yelp = {
    search(location){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/transactions/delivery/search?location=${location}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then(res => {return res.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business=> {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        rating: business.rating,
                        transactions: business.transactions,
                        reviews: business.review_count,
                        url: business.url
                    }
                })
            }
        })
    }
}

export default Yelp;