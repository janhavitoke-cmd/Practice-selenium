import time,random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.action_chains import ActionChains
from faker import Faker

driver = webdriver.Chrome() #initialized webdriver

fake = Faker()

driver.get("https://rahulshettyacademy.com/client/#/auth/register")
driver.maximize_window()

firstname = fake.first_name()
lastname =  fake.last_name()
email = fake.email()
phone = str(fake.random_number(digits=10, fix_len=True))
password = fake.password(length=12, special_chars=True, digits=True, upper_case=True, lower_case=True)
confpass = password

wait = WebDriverWait(driver,20)

driver.find_element(By.XPATH, "//input[@id='firstName']").send_keys(firstname)
driver.find_element(By.XPATH,"//input[@id='lastName']").send_keys(lastname)
driver.find_element(By.XPATH,"//input[@id='userEmail']").send_keys(email)
driver.find_element(By.XPATH,"//input[@id='userMobile']").send_keys(phone)

occupation_dropdown = Select(driver.find_element(By.XPATH, "//select[contains(@class,'custom-select')]"))
occupation_dropdown.select_by_index(2)

gender = driver.find_elements(By.XPATH, "//input[@type='radio']")
random.choice(gender).click()


driver.find_element(By.XPATH,"//input[@id='userPassword']").send_keys(password)
driver.find_element(By.XPATH,"//input[@id='confirmPassword']").send_keys(confpass)

driver.find_element(By.XPATH,"//input[@type='checkbox']").click()

regbutton = wait.until(EC.element_to_be_clickable((By.XPATH,"//input[@id='login']")))
regbutton.click()


wait.until(EC.element_to_be_clickable((By.XPATH, "//a[text()='Login here']"))).click()

wait.until(EC.visibility_of_element_located((By.XPATH, "//input[@id='userEmail']")))

time.sleep(2)

# Fill login form
driver.find_element(By.XPATH, "//input[@id='userEmail']").send_keys(email)
driver.find_element(By.XPATH, "//input[@id='userPassword']").send_keys(password)

# Click login button
wait.until(EC.element_to_be_clickable((By.ID, "login"))).click()

time.sleep(20)

element_to_hover = driver.find_element(By.XPATH, "\\button[contains(@class,'btn-custom')]") 
actions = ActionChains(driver)

actions.move_to_element(element_to_hover).perform()

# Optional: After hover, you can perform another action, like clicking or waiting for an element to appear
wait.until(EC.element_to_be_clickable((By.XPATH, "\\button[contains(@class,'btn-custom')]"))).click()

driver.quit()





