## APIs for Backend

### **Create Task**

-   **Endpoint**: `POST /api/tasks`
-   **Description**: Adds a new task to the to-do list.

**Request Body**:

```json
{
    "title": "Task Title",
    "description": "Task Description"
}
```

**Response**:

```json
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Read Tasks**

-   **Endpoint**: `GET /api/tasks`
-   **Description**: Retrieves the list of all tasks.

**Response**:

```json
[
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
  },
  ...
]
```

---

### **Read Task by ID**

-   **Endpoint**: `GET /api/tasks/{id}`
-   **Description**: Retrieves a specific task by its ID.

**Response**:

```json
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Update Task**

-   **Endpoint**: `PUT /api/tasks/{id}`
-   **Description**: Updates the details of a specific task.

**Request Body**:

```json
{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
}
```

**Response**:

```json
{
    "id": 1,
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Delete Task**

-   **Endpoint**: `DELETE /api/tasks/{id}`
-   **Description**: Deletes a specific task by its ID.

**Response**:

```json
{
    "message": "Task deleted successfully"
}
```
