from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome()

wait = WebDriverWait(driver,20)

driver.get("https://www.tutorialspoint.com/selenium/practice/buttons.php")
driver.maximize_window()

obj = driver.find_element(By.XPATH,"//input[@class='btn-primary']").click()

actions = ActionChains(driver)


# Right-click on the element (context click)
actions.context_click(obj).perform()  # Right-click on the element

wait.until(EC.visibility_of_element_located((By.XPATH,"//input[@id='welcomeDiv']")))

sleep(10)
