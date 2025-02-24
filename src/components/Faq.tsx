import FaqLine from "./FaqLine";
import {  useState } from "react";


type FaqProps={
    questions:string
    answer:string
}
const Faq = () => {
    const Faqs: FaqProps[] = [
        {
          questions: "How does this work?",
          answer:
            "Our platform lets you order from your favorite restaurants and get it delivered to your door. Just  browse the menu, and add items to your basket. You can pay securely using various payment options, including PayPal, credit/debit cards, and mobile payment methods. Once confirmed, your order is sent directly to the restaurant or a nearby delivery driver, ensuring you get your food as fast as possible."
        },
        {
          questions: "Can I order from different restaurants at the same time?",
          answer:
            "At the moment, each order must be placed with a single restaurant to ensure smooth processing and timely delivery. If you’d like food from multiple places, you’ll need to place separate orders. However, we are always working on improving our service, so stay tuned for updates that may allow multi-restaurant orders in the future!"
        },
        {
          questions: "Are your menu prices the same as those at the restaurant?",
          answer:
            "We work closely with restaurants to keep pricing as close as possible to their in-store menu. However, in some cases, slight variations may occur due to delivery service fees, restaurant-specific pricing policies, or regional differences. We always strive to maintain transparency and ensure you get the best possible deal."
        },
        {
          questions: "Some menu items are missing on a restaurant page?",
          answer:
            "Not all restaurants list their entire menu for online delivery. Some dishes may be unavailable due to high demand, supply issues, or restaurant preferences. If there’s a specific item you’re looking for, we recommend checking back later or reaching out to the restaurant directly to see if they can accommodate your request."
        },
        {
          questions: "Do any of your cheeses contain enzymes derived from animal sources?",
          answer:
            "We understand dietary restrictions are important, and cheese ingredients can vary depending on the supplier. Some cheeses may contain animal-derived enzymes, while others are fully vegetarian-friendly. If you need specific details, we recommend checking the ingredient list provided by the restaurant or contacting customer support for assistance."
        },
        {
          questions: "Is the sugar used in your dough refined through animal bone char?",
          answer:
            "Ingredient sourcing can vary by restaurant and supplier, and we know this is an important concern for many customers. While some sugar refinement processes do involve bone char, many suppliers use alternative methods. If you need detailed information, please contact the restaurant directly or reach out to our customer support team, and we’ll be happy to assist."
        },
        {
          questions: "Does your pizza contain peanuts or peanut oil?",
          answer:
            "Our pizzas typically do not contain peanuts or peanut oil as ingredients, but cross-contamination can occur in shared kitchen environments. If you have a peanut allergy, we strongly recommend reviewing allergen information on the menu and contacting the restaurant directly for the safest option."
        },
        {
          questions: "Are your doughs vegan or vegetarian friendly?",
          answer:
            "Many of our restaurant partners offer doughs that are vegan or vegetarian-friendly, but this depends on the specific ingredients used. Some doughs may contain dairy or other animal by-products. For full transparency, we encourage you to check the restaurant’s menu details or contact customer support for confirmation."
        },
        {
          questions: "Does your pepperoni contain gluten?",
          answer:
            "Yes, traditional pepperoni typically contains gluten due to added fillers or seasoning ingredients. However, some restaurants offer gluten-free alternatives. If you require a gluten-free option, we recommend looking for specific menu labels or reaching out to the restaurant for more details before placing your order."
        }
      ];

      const [openIndex, setOpenIndex]=useState<number|null>(null)
      
  return (
    <div className="px-7 py-24 flex flex-col gap-3.5 lg:w-[70vw] mx-auto">
      {
        Faqs.map((faqs,index)=>(
<FaqLine faqs={faqs} key={index} isOpen={openIndex===index} toggle={()=>setOpenIndex(openIndex===index?null:index)}/>
        ))
      }
    </div>
  )
}

export default Faq
