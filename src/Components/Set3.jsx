const Set3 = () => {
    return(
        <>
        <div class="set">
            <div class="gender">
                <label for="gender">Gender:</label>
                <div class="selection">
                    <input id="gender-female" name="gender" type="radio" value="female"/>
                    <label for="gender-female">Female</label>
                    <input id="gender-male" name="gender" type="radio" value="male" />
                    <label for="gender-male">Male</label>
                </div>
            </div>
            <div class="dob">
                <label for="dob">Your Date of Birth:</label>
                <input type="date" id="dob" />
              </div>
        </div>
        </>
    )
}

export default Set3;