/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 
 */


// Shipping rate calculator
document.addEventListener("DOMContentLoaded", async()=>{
  document.querySelectorAll(`[name="country"]`).forEach((elem)=>{
    elem.addEventListener("change", (event)=>{
      const newEvent = new CustomEvent('shipping_country:change');
      document.dispatchEvent(newEvent);
    })
  })
  document.querySelectorAll(`[action="/cart/shipping_rates.json"]`).forEach((form)=>{
    form.addEventListener("submit", async(event)=>{
      event.preventDefault()

      const formData = new FormData(event.target);
      let formEelem = event.target
      const formDataObj = {};

      formEelem.classList.add("loading")
      

      for (const [key, value] of formData.entries()) {
        formDataObj[key] = value;
      }
      if(!formDataObj.zip || !formDataObj.country )return

      let provience=""
      if(formDataObj.provience){
        provience=`&shipping_address[province]=${formDataObj.provience}`
      }

      try{
        let response = await fetch(`/cart/shipping_rates.json?shipping_address[zip]=${formDataObj.zip}&shipping_address[country]=${formDataObj.country}${provience}`);
        if(response.ok){
          let data = await response.json()
          document.querySelectorAll(".estimated-shipping").forEach((esc) => {
            esc.innerHTML = ""
            data.shipping_rates.forEach((rate, index) => {
              if(index == 0){
                const rateInfo = `<p test-attr="${index}">Ground: ${esc.getAttribute("symbol") || ""}${rate.price} ${rate.currency}</p>`;
                esc.insertAdjacentHTML('beforeend', rateInfo);
              } else if(index == 1) {
                const rateInfo = `<p test-attr="${index}">3 DAY: ${esc.getAttribute("symbol") || ""}${rate.price} ${rate.currency}</p>`;
                esc.insertAdjacentHTML('beforeend', rateInfo);
              } else if(index == 2) {
                const rateInfo = `<p test-attr="${index}">Overnight: ${esc.getAttribute("symbol") || ""}${rate.price} ${rate.currency}</p>`;
                esc.insertAdjacentHTML('beforeend', rateInfo);
              } else {
                const rateInfo = `<p test-attr="${index}">Estimate Shipping: ${esc.getAttribute("symbol") || ""}${rate.price} ${rate.currency}</p>`;
                esc.insertAdjacentHTML('beforeend', rateInfo);
              }
             
            });
          });
        }
      }catch(error){
        console.log(error)
      }

      formEelem.classList.remove("loading")
    })
  })

  
  const newEvent = new CustomEvent('shipping_country:change');
  document.dispatchEvent(newEvent);
})




document.addEventListener("shipping_country:change", async()=>{

  let countries = null
  try{
    let res = await fetch('https://raw.githubusercontent.com/muscled-clients/countries/main/countries.json')
    if (res.ok) {
      countries = await res.json()
    }
  } catch(error){
    console.log(error)
  }
  
  if(!countries)return
  document.querySelectorAll(`[name="country"]`).forEach((elem)=>{
    
    let selectElement = document.querySelector(`#${elem.getAttribute("location")}`) || null;
    if(!selectElement)return
    selectElement.innerHTML = ""
    
    countries.forEach((country)=>{
      if(country.country.toLowerCase() == elem.value.toLowerCase() || country.short.toLowerCase() == elem.value.toLowerCase()) {
        
        let provinces = country.provinces
        let provinces_wrapper=selectElement.closest('.form__input-wrapper')

        if (provinces.length <= 0) {
          selectElement.disabled = true
          
          if(provinces_wrapper){
            provinces_wrapper.style.display="none"
          }
        }else{
          selectElement.disabled = false
          if(provinces_wrapper){
            provinces_wrapper.style.display="block"
          }
          provinces.forEach((province)=>{
            const option = document.createElement('option');
            option.value = province.short;
            option.text = province.name;
  
            selectElement.appendChild(option);
          })
        }
      }
    })
  })
})


$(document).ready(function(){
  mobileOnlySlider(".mySlider", true, false, 767);

  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        }
      ]
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider
  
  
	//installer page tab
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});