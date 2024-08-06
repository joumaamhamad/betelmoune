import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Workshop from './models/workshopModel.js';
const workshops = [
    {
        id: 1,
        name: "Introduction to El Moune",
        slug: "introduction-to-el-moune",
        description: "Learn the basics of traditional Lebanese food preservation techniques.",
        date: new Date("2024-08-01T10:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Introduction", "History of El Moune"],
        price: 50,
        images: ["https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg", "https://silkroadrecipes.com/wp-content/uploads/2020/07/Lebanese-Seven-Spice-Blend-square.jpg", "https://miro.medium.com/v2/resize:fit:1080/1*qlBeWAKsZNZjNmCy4cloWw.png" , "https://www.four-seasons.ro/images/evenimente/spices-four-seasons2.png" , "https://www.allrecipes.com/thmb/MU4sihJ6xm5ATweejVWzamdbJxo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/267408-spicy-vietnamese-quick-pickled-vegetables-DDMFS-4x3-2719-becd9a3a80ce497a81f66ef8912dfae1.jpg", "https://www.cooking-therapy.com/wp-content/uploads/2020/08/Pickled-Vegetables-5.jpg"],
        type: 'Trending'
    },
    {
        id: 2,
        name: "Pickling Vegetables",
        slug: "pickling-vegetables",
        description: "Master the art of pickling various vegetables in the traditional Lebanese style.",
        date: new Date("2024-08-05T14:00:00Z"),
        duration: 2,
        capacity: 15,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Pickling", "Vegetables"],
        price: 40,
        type: 'Trending',
        images: ["https://www.allrecipes.com/thmb/MU4sihJ6xm5ATweejVWzamdbJxo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/267408-spicy-vietnamese-quick-pickled-vegetables-DDMFS-4x3-2719-becd9a3a80ce497a81f66ef8912dfae1.jpg", "https://www.cooking-therapy.com/wp-content/uploads/2020/08/Pickled-Vegetables-5.jpg" , "https://foodhub.scene7.com/is/image/woolworthsltdprod/2203-pickled-vegetables:Mobile-1300x1150" , "https://www.seriouseats.com/thmb/uQeEIawswJk3hopfN3pWBYGlZac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230314-SEA-Tourshi-VickyWasik-hero-b897b4ac0afb459fa5e95b67549d1997.JPG"],
    },
    {
        id: 3,
        name: "Making Labneh at Home",
        slug: "making-labneh-at-home",
        description: "Learn how to make your own labneh, a traditional Lebanese yogurt cheese.",
        date: new Date("2024-08-10T09:00:00Z"),
        duration: 4,
        capacity: 25,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Labneh", "Dairy Products"],
        price: 60,
        type: 'Trending',
        images: ["https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2014/02/labneh-balls-2000-1-2-280x300.jpg", "https://littlesunnykitchen.com/wp-content/uploads/2021/03/Labneh-Recipe-1-750x750.jpg" , "https://cdn.loveandlemons.com/wp-content/uploads/2020/05/labneh-yogurt.jpg" , "https://www.manusmenu.com/wp-content/uploads/2012/06/1-Labneh-1-1-of-1.jpg"],
    },
    {
        id: 4,
        name: "Preserving Fruits",
        slug: "preserving-fruits",
        description: "Techniques for preserving fruits using traditional Lebanese methods.",
        date: new Date("2024-08-15T11:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Fruit Preservation", "Jam Making"],
        price: 50,
        type: 'Premium',
        images: ["https://blog.thompson-morgan.com/wp-content/uploads/2022/07/20220607_tm_overview_of_preserved_fruits.jpg", "https://i0.wp.com/zoominnutrition.com/wp-content/uploads/2021/10/Food_Preserving_cov1.png?resize=940%2C675&ssl=1" , "https://www.almanac.com/sites/default/files/users/The%20Editors/frozen-shutterstock_1580573581_0_full_width.jpg" , "https://www.halfyourplate.ca/wp-content/uploads/2022/09/strawberry-freezer-jam-in-jar-sq.jpg"],
    },
    {
        id: 5,
        name: "Olive Preservation",
        slug: "olive-preservation",
        description: "Learn how to preserve olives in the traditional Lebanese way.",
        date: new Date("2024-08-20T10:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Olive Preservation", "Salting Techniques"],
        price: 50,
        type: 'Premium',
        images: ["https://cdn.mos.cms.futurecdn.net/7X5dvNX9hpgZFvwSGaXZpi.jpg", "https://www.thespruceeats.com/thmb/JX-Ik1jghLnbGAknB7eNlP_8KVo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greenolives-5a85e5dfa18d9e0037a56ce5.jpg" , "https://i.ytimg.com/vi/S7PLpITU-RA/maxresdefault.jpg" , "https://koala.sh/api/image/v2-9eq9g-r8e1m.jpg?width=1216&height=832&dream"],
    },
    {
        id: 6,
        name: "Making Kibbeh Nayeh",
        slug: "making-kibbeh-nayeh",
        description: "A workshop dedicated to making Kibbeh Nayeh, a traditional Lebanese raw meat dish.",
        date: new Date("2024-08-25T09:00:00Z"),
        duration: 4,
        capacity: 25,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Kibbeh Nayeh", "Meat Preparation"],
        price: 60,
        type: 'Upcoming',
        images: ["https://www.mamaslebanesekitchen.com/wp-content/uploads/2011/09/Kibbeh-Nayyeh.jpg", "https://www.mamaslebanesekitchen.com/wp-content/uploads/2011/09/kibbeh3.jpg" , "https://thematbakh.com/wp-content/uploads/2022/04/kibbeh-nayeh-lebanese-raw-kibbeh-3.jpg" , "https://thematbakh.com/wp-content/uploads/2022/04/kibbeh-nayeh-lebanese-raw-kibbeh-7.jpg"],
    },
    {
        id: 7,
        name: "Canning Tomatoes",
        slug: "canning-tomatoes",
        description: "Learn how to can tomatoes to use in various Lebanese dishes.",
        date: new Date("2024-08-30T11:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Tomato Canning", "Sauce Making"],
        price: 50,
        type: 'Premium',
        images: ["https://www.shelovesbiscotti.com/wp-content/uploads/2017/09/IMG_0494.png", "https://images.squarespace-cdn.com/content/v1/563cf214e4b021af1b575f8a/1454031226999-JCBCSGWASXSI5DZYMLFK/tomato-canning.jpg" , "https://thecozycook.com/wp-content/uploads/2015/08/Canned-Tomatoes.jpg" , "https://melissaknorris.com/wp-content/uploads/2021/09/tomatosaucelineup.jpg"],
    },
    {
        id: 8,
        name: "Herb Drying Techniques",
        slug: "herb-drying-techniques",
        description: "Preserve herbs using traditional Lebanese drying techniques.",
        date: new Date("2024-09-05T14:00:00Z"),
        duration: 2,
        capacity: 15,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Herb Drying", "Spices"],
        price: 40,
        type: 'Premium',
        images: ["https://morningchores.com/wp-content/uploads/2020/09/Drying-Herbs.jpg", "https://www.tasteofhome.com/wp-content/uploads/2024/02/GettyImages-1923062478-how-to-dry-herbs-JVedit.jpg" , "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MTE1Njc4MjUxNzg3NzIx/drying-herbs-in-a-convection-oven-dehydrating-dehydrator-dry-herb-oregano.jpg" , "https://afarmgirlinthemaking.com/wp-content/uploads/2020/07/PSX_20200703_165219-scaled-e1593830501103.jpg"],
    },
    {
        id: 9,
        name: "Making Pomegranate Molasses",
        slug: "making-pomegranate-molasses",
        description: "A step-by-step workshop on making pomegranate molasses at home.",
        date: new Date("2024-09-10T10:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Pomegranate Molasses", "Preservation Techniques"],
        price: 50,
        type: 'Premium',
        images: ["https://cdn.prod.website-files.com/61cb78816c8c4a56f75f0656/62699c14bab0293d0abd9406_hero.jpg", "https://img.taste.com.au/1BB6Goao/taste/2016/11/how-to-make-pomegranate-molasses-64412-1.jpg" , "https://www.seriouseats.com/thmb/cjbTwfG6hubSiNc2KrRe41eVH-E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210201-pomegranate-molasses-nik-sharma-6-ecf9af54466a4334a7123e1c95dd510e.jpg" , "https://assets.bonappetit.com/photos/57acf3ab1b33404414975383/1:1/w_2560%2Cc_limit/pomegranate-molasses-chicken-with-bulgur-salad.jpg"],
    },
    {
        id: 10,
        name: "Traditional Lebanese Spices",
        slug: "traditional-lebanese-spices",
        description: "Learn about the traditional Lebanese spices and how to preserve them.",
        date: new Date("2024-09-15T14:00:00Z"),
        duration: 2,
        capacity: 15,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Spices", "Preservation Techniques"],
        price: 40,
        type: 'Premium',
        images: ["https://silkroadrecipes.com/wp-content/uploads/2020/07/Lebanese-Seven-Spice-Blend-square.jpg", "https://miro.medium.com/v2/resize:fit:1080/1*qlBeWAKsZNZjNmCy4cloWw.png" , "https://www.four-seasons.ro/images/evenimente/spices-four-seasons2.png" , "https://forksandfoliage.com/wp-content/uploads/2023/05/lebanese-7-spice-21.jpg"],
    },
    {
        id: 11,
        name: "Making Makdous",
        slug: "making-makdous",
        description: "A comprehensive guide to making Makdous, stuffed pickled eggplants.",
        date: new Date("2024-09-20T09:00:00Z"),
        duration: 4,
        capacity: 25,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Makdous", "Pickling", "Stuffed Vegetables"],
        price: 0,
        type: 'Free',
        images: ["https://falasteenifoodie.com/wp-content/uploads/2023/02/makdous.jpg", "https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-9-1024x679.jpg", "https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2023/07/makdous-14-2.jpg" , "https://www.alphafoodie.com/wp-content/uploads/2020/04/Simple-Stuffed-Makdous-Recipe-7-of-9.jpeg"],
    },
    {
        id: 12,
        name: "Making Quince Jam",
        slug: "making-quince-jam",
        description: "Learn how to make quince jam, a traditional Lebanese preserve.",
        date: new Date("2024-09-25T10:00:00Z"),
        duration: 3,
        capacity: 20,
        registeredUsers: [],
        instructor: "66a15aa2e0f69ffdcda06125", // replace with actual ObjectId
        topics: ["Quince Jam", "Fruit Preservation"],
        price: 50,
        type: 'Upcoming',
        images: ["https://hildaskitchenblog.com/wp-content/uploads/2017/10/quince-preserves-8-500x500.jpg", "https://www.lazzaris.com/wp-content/uploads/sites/2/2018/07/Marmellata_mele_cotogne3.jpg", "https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2017/11/safarjal-1.jpg" , "https://edibleparadise.com/wp-content/uploads/2023/09/AdobeStock_524247279_quince-jam.jpg"],
    },

]


dotenv.config();

console.log('url::', process.env.MONGO_ATLAS);

mongoose
    .connect(process.env.MONGO_ATLAS)
    .then(() => console.log('connected to db!'))
    .catch((err) => {
    console.log(err.message);
});


const addWorkshops = async () => {
    // await Workshop.deleteMany({});
    await Workshop.deleteMany({});
    const createdWorkshops = await Workshop.insertMany(workshops);

}

addWorkshops();



