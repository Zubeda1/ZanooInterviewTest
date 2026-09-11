import {test, expect} from '@playwright/test'

test.describe('test scenario checkbox and dropdown', () => {
  test('checkbox element and dropdown select text',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const checkRadio1= await page.getByRole('radio',{name:'radioButton'})

    //const checkRadio1= await page.locator('label').filter({hasText:'Radio1'}).getByRole('radio')
    // Assert on the actual radio input element
   checkRadio1.click()
    await expect(checkRadio1).toBeChecked()

    const dropdownSelect= await page.locator('#dropdown-class-example')
    dropdownSelect.selectOption('option1')
    await expect(dropdownSelect).toHaveValue('option1')
})

test('extract data', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  const dataList= await page.locator('.table-display tr td:nth-child(3)')
  const count = await dataList.count()
  console.log('Price in list', count)
  let price:number[]=[]

  for(let i=0; i<count; i++){
    const text = await dataList.nth(i).innerText()
    const numeric = parseInt(text.replace(/[^0-9.]/g, ''))
    price.push(numeric)
    console.log('textlist:',numeric)
    
  }
  console.log('priceList:', price)

  const lowestPrice = Math.min(...price)
  console.log('Lowest Price:',lowestPrice)
  expect(lowestPrice).toBeLessThanOrEqual(0)
})
})


