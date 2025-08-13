import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome() #initialized webdriver

driver.get("https://rahulshettyacademy.com/client/#/auth/register")
driver.maximize_window()

driver.find_element(By.XPATH, "//input[@id='firstName']").send_keys("Robb")
driver.find_element(By.XPATH,"//input[@id='lastName']").send_keys("banner")
driver.find_element(By.XPATH,"//input[@id='userEmail']").send_keys("robbinbanner@gmail.com")
driver.find_element(By.XPATH,"//input[@id='userMobile']").send_keys("9898989898")

occupation_dropdown = Select(driver.find_element(By.XPATH, "//select[contains(@class,'custom-select')]"))
occupation_dropdown.select_by_visible_text("Engineer")

driver.find_element(By.XPATH, "//input[@type='radio' and @value='Female']").click()

driver.find_element(By.XPATH,"//input[@id='userPassword']").send_keys("#123@Jan")
driver.find_element(By.XPATH,"//input[@id='confirmPassword']").send_keys("#123@Jan")

driver.find_element(By.XPATH,"//input[@type='checkbox']").click()

regbutton = WebDriverWait(driver,200).until(EC.element_to_be_clickable((By.XPATH,"//input[@id='login']")))
regbutton.click()

wait = WebDriverWait(driver,300).until(EC.element_to_be_clickable((By.ID,"login")))

login = WebDriverWait(driver, 400).until(
    EC.element_to_be_clickable((By.XPATH, "//a[text()='Login here']"))
)
login.click()
time.sleep(10)

'''''
driver.get("https://rahulshettyacademy.com/client/#/auth/login")
driver.maximize_window()

driver.find_element(By.ID,"userName").send_keys("Robb")
driver.find_element(By.ID,"userPassword").send_keys("banner")
WebDriverWait(driver,300).until(EC.element_to_be_clickable((By.ID,"login")))
time.sleep(10)
'''

driver.quit()



