// Function to store plan details and redirect to payment page
function storePlanAndRedirect(event, type, price, validity, data, sms) {
    event.preventDefault(); // Prevent default anchor action

    // Validate plan details
    if (!type || !price || !validity || !data || !sms) {
        alert("Package details are incomplete. Please select a valid package.");
        return;
    }

    // Store selected plan in localStorage
    const planDetails = { type, price, validity, data, sms };
    localStorage.setItem('rechargePlan', JSON.stringify(planDetails));

    // Redirect to payment page
    window.location.href = "pay.html";
}

// Function to retrieve and display plan details on the payment page
document.addEventListener("DOMContentLoaded", function () {
    const planDetails = localStorage.getItem('rechargePlan');

    // Check if plan details exist
    if (!planDetails) {
        alert("No recharge plan found. Please select a valid package.");
        window.location.href = "recharge.html"; // Redirect back to selection page
        return;
    }

    // Parse plan details
    const { type, price, validity, data, sms } = JSON.parse(planDetails);

    // Validate plan details before displaying
    if (!type || !price || !validity || !data || !sms) {
        alert("Package details are incomplete. Please select a valid package.");
        window.location.href = "recharge.html";
        return;
    }

    // Display plan details in payment page
    document.getElementById("selectedPlan").innerHTML = `
        <h3>${type} Plan</h3>
        <p>Price: Rs. ${price}</p>
        <p>Validity: ${validity} days</p>
        <p>Data: ${data}</p>
        <p>SMS: ${sms}</p>
    `;
});
