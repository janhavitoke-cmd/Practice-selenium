import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait,Select
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.implicitly_wait(15)

driver.get("https://www.tutorialspoint.com/selenium/practice/text-box.php")
driver.maximize_window()

driver.find_element(By.XPATH,"//input[@name='fullname']").send_keys("Janhavi")
driver.find_element(By.ID,"email").send_keys("jt@gmail.com")
driver.find_element(By.NAME,"address").send_keys("123,the address is indore")
driver.find_element(By.XPATH,"//input[@id='password']").send_keys("90990990")


login_button = driver.find_element(By.CLASS_NAME, "btn-primary") # Adjust locator as needed
login_button.click()


time.sleep(5)
driver.quit()