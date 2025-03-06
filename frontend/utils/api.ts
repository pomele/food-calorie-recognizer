export const fetchCalories = async (imageUri: string) => {
  try {
    const response = await fetch('http://192.168.31.137:18888/api/calculate_calories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUri }),
    });


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
}; 