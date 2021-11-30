// var fetch = require('node-fetch');

// fetch('https://www.eatthismuch.com/weeklyplanner/regenerate-day-json/', {
//   method: 'POST',
//   headers: {
//     authority: 'www.eatthismuch.com',
//     'sec-ch-ua': '^^',
//     accept: 'application/json, text/javascript, */*; q=0.01',
//     'x-csrftoken': 'null',
//     'x-requested-with': 'XMLHttpRequest',
//     'sec-ch-ua-mobile': '?0',
//     'user-agent':
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
//     'content-type': 'application/json; charset=UTF-8',
//     origin: 'https://www.eatthismuch.com',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-dest': 'empty',
//     referer: 'https://www.eatthismuch.com/',
//     'accept-language': 'en-US,en;q=0.9',
//     cookie:
//       '_ga=GA1.2.1532858141.1622535321; _gid=GA1.2.1494151464.1622535321; _fbp=fb.1.1622535322173.1086283804; _gat=1; amplitude_id_2738a2024d3ca5fde381a629b48399bfeatthismuch.com=eyJkZXZpY2VJZCI6IjU3MTM3YzExLWQ0ZjctNDNiOS1iZTU0LWM4YTZiMDFlMTg1YVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYyMjYxMjE5MDQ3NywibGFzdEV2ZW50VGltZSI6MTYyMjYxMjMyMjY4MywiZXZlbnRJZCI6MTMsImlkZW50aWZ5SWQiOjMsInNlcXVlbmNlTnVtYmVyIjoxNn0=',
//   },
//   body: `{"day_json":{"user_settings":{"activity_level":"1.2","age":29,"bodyfat":null,"beta_user":true,"todays_weight":null,"use_weight_goal":false,"weight_goal":null,"weight_goal_weekly_rate":null,"custom_exclusions":"","daily_price_limit":10,"exclusions":"","friend_signups":0,"friend_successes":0,"gender":null,"goal":null,"hide_gender":true,"limit_price":false,"link_clicks":0,"months_saved_up":0,"number_curated_recipes":0,"preset_diet":"atkins / ketogenic","total_months_earned":0,"units":"I","use_leftovers":false,"complexity_level":1,"generator_focus":0,"show_walkthrough_prompt":true,"single_template_diet":true,"timezone":"5.5","shopping_day":5,"use_partial_servings":false,"resource_uri":-536367632,"use_net_carbs":true},"meal_plan_dates":[{"date":null,"diet":{"resource_uri":-575943152,"num_meals":2,"nutrition_profile":{"calories":300,"cholesterol":300,"date_made":null,"deleted":false,"description":null,"fiber":25,"macro_scheme":"grams","max_carbs":7,"max_fats":28,"max_proteins":23,"min_carbs":0,"min_fats":20,"min_proteins":11,"percent_carbs":40,"percent_fats":30,"percent_proteins":30,"sodium":2400,"title":"My Nutrition Targets","watch_cholesterol":false,"watch_sodium":false,"resource_uri":-237121291},"meals":[{"resource_uri":-270004934,"meal_number":0,"meal_type":{"title":"Breakfast","size_slider":100,"family_scale":1,"breakfast":2,"takeout":0,"min_preptime":0,"max_preptime":30,"min_cooktime":0,"max_cooktime":30,"max_totaltime":30,"complexity":2,"override_complexity":false,"only_use_recurring":false,"deleted":false,"resource_uri":-538822818},"foods":[{"id":-946273109,"food_id":906743,"amount":1,"units":1,"is_leftovers":false,"leftovers_from":null,"leftovers_from_id":null,"eaten":false,"has_leftovers":false,"resource_uri":"-946273109","makes_leftovers_for":null,"uses_leftovers_from":null}],"id":-270004934},{"resource_uri":-605879153,"meal_number":1,"meal_type":{"title":"Lunch","size_slider":100,"family_scale":1,"breakfast":0,"takeout":0,"min_preptime":0,"max_preptime":30,"min_cooktime":0,"max_cooktime":0,"max_totaltime":30,"complexity":2,"override_complexity":false,"only_use_recurring":false,"deleted":false,"resource_uri":-135172437},"foods":[{"id":-706184321,"food_id":927802,"amount":1,"units":1,"is_leftovers":false,"leftovers_from":null,"leftovers_from_id":null,"eaten":false,"has_leftovers":false,"resource_uri":"-706184321","makes_leftovers_for":null,"uses_leftovers_from":null},{"food_id":474253,"amount":1,"units":1,"is_leftovers":false,"leftovers_from":null,"leftovers_from_id":null,"eaten":false,"has_leftovers":false,"resource_uri":-711688310,"makes_leftovers_for":null,"uses_leftovers_from":null,"id":-711688310}],"id":-605879153}]}}],"is_day_regenerate":true},"existing_food_ids":[907038,927802,34576,34670,412982,472320,474253,905510,905651,906743,906792,906829,907168,943340,1466984,1467007,1522308],"use_meal_pools":true}`,
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// const a = {
//   message: {
//     help: "Need Help",
//     intro: "Until you get your nutrition right nothing is going to change.",
//   },
//   buttons: {
//     makeDiet: "Make Diet",
//   },
// };

// const b =   `{
//   "message": {
//     "help": "Brauchen Sie Hilfe",
//     "intro": "Bis Sie Ihre Ernährung richtig eingestellt haben, wird sich nichts ändern."
//   },
//   "buttons": {
//     "makeDiet": "Diät machen"
//   }
// }`

// console.log(JSON.parse(b))

const str = '# 300g \n# 1 tbsp \n# 2 tsp \n# 1 \n# 1 \n# 100g \n# 20g '.split('\n')
console.log(str)
