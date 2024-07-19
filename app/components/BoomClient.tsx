"use client";

import './boom-client.css'

interface DeleteButtonProps {
  userId: number;
}

const DeleteButton = ({ userId }: DeleteButtonProps) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete user");
      }

      window.location.href = '/';
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <button id="button-boom" onClick={handleDelete}>🎮</button>
  );
};

export default DeleteButton;
