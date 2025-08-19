from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize WebDriver
driver = webdriver.Chrome()

# Apply implicit wait (waits for elements to appear for up to 3 seconds)
driver.implicitly_wait(3)

# Open the website
driver.get("https://www.tutorialspoint.com/selenium/practice/radio-button.php")
driver.maximize_window()

# Select option in the dropdown

radio_button = driver.find_element(By.XPATH, "//input[@value='igottwo']").click()

# Wait for 5 seconds using sleep for the purpose of this example
sleep(5)

# Close the browser
driver.quit()
