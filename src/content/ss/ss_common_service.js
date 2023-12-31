export function fillRealEstateType(document, message) {


    const elements = document.querySelectorAll('.sc-f90a41ca-3');
  
    const elementsArray = Array.from(elements);
    elementsArray.forEach(element => {
      if (element.textContent.trim().includes(message.message.realEstateType)) {
        element.click();
      }
    });
  
  }



  export function fillRealEstateDealType(document, message) {

    const elements = document.querySelectorAll('.sc-f90a41ca-3');
  
    const elementsArray = Array.from(elements);
  
    elementsArray.forEach(element => {
      if (element.textContent.trim() === message.message.dealType) {
        element.click();
      }
    });
  
  }


  export function fillImages(document, message) {

  
    const stringArray = message.message.imagePathes.split(' ');

    /*--------------------------*/
    async function uploadImages(stringArray) {
      const input = document.evaluate('//div[@id="create-app-images"]//input[@type="file"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
      const dataTransfer = new DataTransfer();
     
      // Create an array of promises for fetch operations
      const fetchPromises = stringArray.map(async (imageUrl, i) => {
          try {
              const response = await fetch(imageUrl);
  
              // Insert a timeout (e.g., 1000 milliseconds) before processing the response
              await new Promise(resolve => setTimeout(resolve, 4000));
  
              const blob = await response.blob();
              const file = new File([blob], `image${i}.jpg`, { type: 'image/jpeg' });
              dataTransfer.items.add(file);
          } catch (error) {
              console.error('Error is:', error);
          }
      });
  
      // Wait for all fetch operations to complete
      await Promise.all(fetchPromises);
  
      // Set the DataTransfer object containing all files to the input element
      input.files = dataTransfer.files;
  
      // Dispatch the 'change' event once after all files are added
      const event = new Event('change', {
          bubbles: true,
      });
      input.dispatchEvent(event);
  }
  



    uploadImages(stringArray);
  }


    
   
  
export function fillStatus(document, message) {

  setTimeout(function () {
    var xpathExpression = "//div[@id='create-form-details']//span[text()='სტატუსი']";
    var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var targetSpan = result.singleNodeValue;


    var firstSibling = targetSpan.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');
 
    paragraphs.forEach(function (paragraph) {
      if (paragraph.textContent.trim() === message.message.constructionStatus)
        paragraph.click();
    });
  }, 3000);

}



export function fillRooms(document, message) {

  var xpathExpression = "//div[@id='create-form-details']//span[text()='ოთახები']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  var targetSpan = result.singleNodeValue;

  
  var firstSibling = targetSpan.parentElement.nextElementSibling;


  var paragraphs = firstSibling.querySelectorAll('p');

  var valuesArray = [];


  paragraphs.forEach(function (paragraph) {
    valuesArray.push(paragraph);
  });


  setTimeout(function () {

    if (message.message.rooms > 8) valuesArray[valuesArray.length - 1].click();
    else
      if (valuesArray.length > 1) {

        var integerNumber = parseInt(message.message.rooms, 10);

        var selectedElement = valuesArray[integerNumber - 1];

        if (selectedElement) {
          selectedElement.click();
        } else {
          console.log("Selected element is undefined.");
        }
      } else {
        console.log("There are not enough elements in the NodeList.");
      }
  }, 2000);

}




export function fillBedrooms(document, message) {
  setTimeout(function () {

  const xpathExpression = "//div[@id='create-form-details']//span[contains(text(),'საძინებელი')]";
  const xpathResult = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const element = xpathResult.singleNodeValue;
  
  if (element) {
    var firstSibling = element.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');
  
    var valuesArray = [];
  
  
    paragraphs.forEach(function (paragraph) {
      valuesArray.push(paragraph);
    });
  
  } else {
      console.log('Element not found.');
  }


  if (valuesArray.length > 1) {

    var integerNumber = parseInt(message.message.bedroomCount, 10);

    var selectedElement = valuesArray[integerNumber - 1];

    if (selectedElement) {
      selectedElement.click();
    } else {
      console.log("Selected element is undefined.");
    }
  } else {
    console.log("There are not enough elements in the NodeList.");
  }
  
}, 3000);

}





export function fillTotalArea(document, message) {

  const totalAreaInput = document.getElementsByName('totalArea')[0];
  totalAreaInput.value = message.message.estateSpace;
 
  const event = new Event('change', {
    bubbles: true,
  });
  
  totalAreaInput.dispatchEvent(event);
}




export function fillDescription(document, message) {

  var xpathExpression = '//*[@id="create-app-desc"]//textarea';
  var textareaElement = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (textareaElement) {
    textareaElement.value = message.message.comment;

    const event = new Event('change', {
      bubbles: true,
    });
    textareaElement.dispatchEvent(event);

  } else {
    console.log('Textarea element not found');
  }

}





export function fillCondition(document, message) {

  setTimeout(function () {
    var xpathExpression = "//div[@id='create-form-details']//span[text()='მდგომარეობა']";
    var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var targetSpan = result.singleNodeValue;
    
    var firstSibling = targetSpan.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');

    paragraphs.forEach(function (paragraph) {

      let cond2 =  message.message.condition.trim();

      if (cond2 === "ახალი გარემონტებული") cond2 = "ახალი რემონტით";
      
      if (paragraph.textContent.trim() === cond2) paragraph.click();
    });
  }, 2000);

}





export function fillAdditionFields(document, message) {
  var xpathExpression = "//div[@id='create-app-additional-info']//h4[text()='დამატებითი ინფორმაცია']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  var targetSpan = result.singleNodeValue;


  var firstSibling = targetSpan.parentElement.nextElementSibling;

  var paragraphs = firstSibling.querySelectorAll('p');

  paragraphs.forEach(function (paragraph) {

    const elementTxt = paragraph.textContent.trim();
    if ((message.message.hasGas === "კი") && (elementTxt === "ბუნებრივი აირი")) paragraph.click();
    if ((message.message.hasbalcony === "კი") && (elementTxt === "აივანი")) paragraph.click();
    if ((message.message.hasBasement === "კი") && (elementTxt === "სარდაფი")) paragraph.click();
    if ((message.message.hasPassangerElevator === "კი") && (elementTxt === "ლიფტი")) paragraph.click();
    if ((message.message.hasParking === "კი") && (elementTxt === "გარაჟი")) paragraph.click();
    if ((message.message.hasStorageRoom === "კი") && (elementTxt === "სათავსო")) paragraph.click();
    if ((message.message.hasHeating === "კი") && (elementTxt === "ცენტ. გათბობა")) paragraph.click();
    if ((message.message.hasAirConditioner === "კი") && (elementTxt === "კონდიციონერი")) paragraph.click();
    if ((message.message.hasFurniture === "კი") && (elementTxt === "ავეჯი")) paragraph.click();
    if ((message.message.hasHotWater === "კი") && (elementTxt === "ცხელი წყალი")) paragraph.click();
    if ((message.message.hasInternet === "კი") && (elementTxt === "ინტერნეტი")) paragraph.click();
    if ((message.message.hasTV === "კი") && (elementTxt === "ტელევიზორი")) paragraph.click();
  });

}