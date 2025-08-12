"""""
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


# 1. Setup Chrome WebDriver
driver = webdriver.Chrome (service=Service(ChromeDriverManager().install()))

# 2. Open Facebook login page
driver.get("https://www.facebook.com/login/")
driver.maximize_window()

# 3. Wait for the page to load
time.sleep(2)

# 4. Enter username (email/pass)
driver.find_element(By.ID, "email").send_keys("janhavi")

# 5. Enter password
driver.find_element(By.ID, "pass").send_keys("janhavi123")

# 6. Click the login button
driver.find_element(By.NAME, "login").click()

# 7. Optional: Wait to see the result
time.sleep(5)

# 8. Close the browser
driver.quit()
"""""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.common.exceptions import NoAlertPresentException
import time

driver = webdriver.Chrome()

# Navigate to a page with a simple alert (example: a JavaScript alert)
driver.get("https://www.facebook.com/")  # Replace with a URL that triggers an alert

# Trigger an alert for testing (this would usually be triggered by some action on the page)
driver.execute_script("alert('This is a simple alert!')")

# Switch to the alert
alert = driver.switch_to.alert()

# Print alert text
print("Alert Text: ", alert.text)

# Accept the alert (click OK)
alert.accept()

# Close the browser
driver.quit()

