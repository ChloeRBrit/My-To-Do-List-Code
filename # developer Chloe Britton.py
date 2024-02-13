# developer Chloe Britton
# 2/10/2024
# to-do-list code
from flask import Flask, render_template, request

app = Flask(__name__)

tasks = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        task = request.form['task']
        tasks.append(task)
    return render_template('index.html', tasks=tasks)

@app.route('/remove_task/<int:task_id>')
def remove_task(task_id):
    if 0 <= task_id < len(tasks):
        del tasks[task_id]
    return render_template('index.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)
user_list = []

num_elements = int(input("How many tasks do you want to do today: "))

# Get user input for tasks
for i in range(num_elements):
    element = input(f"Enter Task {i + 1}: ")
    user_list.append(element)

# Display today's tasks
print("Today's Tasks:")
for element in user_list:
    print(element)

# Check if tasks have been added before asking to remove
if user_list:
    # Prompt the user if they want to remove a task
    choice = input("If you would like to remove a task, type 'value' or 'index': ")
    if choice == "value":
        # Delete by value
        value_to_delete = input("Enter the value to delete: ")
        if value_to_delete in user_list:
            user_list.remove(value_to_delete)
            print("Value deleted successfully.")
        else:
            print("Value not found in the list.")
    elif choice == "index":
        # Delete by index
        index_to_delete = int(input("Enter the index to delete: "))
        if 0 <= index_to_delete < len(user_list):
            del user_list[index_to_delete]
            print("Element at index", index_to_delete, "deleted successfully.")
        else:
            print("Invalid index.")
    else:
        print("Invalid choice.")
else:
    print("No tasks added yet.")

# Display the updated list
print("Updated list:", user_list)