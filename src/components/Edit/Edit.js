import React from 'react';
import './Edit.css';

import edit from '././assets/edit.png';
import registerUser from '././assets/register_user.png';
import tickIcon from '././assets/tick_icon.png';
import user_ava_1 from '././assets/user_ava_1.png';
import user_ava_2 from '././assets/user_ava_2.png';
import user_ava_3 from '././assets/user_ava_3.png';
import user_ava_4 from '././assets/user_ava_4.png';
import user_ava_5 from '././assets/user_ava_5.png';
import user_ava_6 from '././assets/user_ava_6.png';

export default function Edit() {
	return(
		<div>
			<div className="editAll">
				<div className="row">
					<div className="left col-xl-6">
						{/*editPhoto*/}
						<div className="editPhoto">
							<div className="title">
								<div className="img">
									<img src={edit} className="w-100" />
								</div>
								<p>Rasmni o’zgartirish</p>
							</div>
							<div className="profilePhotos">
								<div className="profilePhotos__item">
									<img src={user_ava_1} className="profi w-100" />
									<div className="frame">
										<img src={tickIcon} className="w-100" />
									</div>
								</div>
								<div className="profilePhotos__item">
									<img src={user_ava_2} className="w-100" />
								</div>
								<div className="profilePhotos__item">
									<img src={user_ava_3} className="profi w-100" />
								</div>
								<div className="profilePhotos__item">
									<img src={user_ava_4} className="profi w-100" />
								</div>
								<div className="profilePhotos__item">
									<img src={user_ava_5} className="profi w-100" />
								</div>
								<div className="profilePhotos__item">
									<img src={user_ava_6} className="profi w-100" />
								</div>
							</div>
						</div>
						{/*personalEdit*/}
						<div className="personalEdit">
							<div className="title">
								<div className="img">
									<img src={registerUser} className="w-100" />
								</div>
								<p>Shaxsiy ma’lumotlarni o’zgartirish</p>
							</div>
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label for="name" class="form-label">Name</label>
										<div class="input-group mb-3">
											<div className="img">
												<img src={edit} className="w-100" />
											</div>
											<input type="text" class="form-control" placeholder="Ali" id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label for="name" class="form-label">Surname</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" placeholder="Usman" id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>
						{/*Gender and Age*/}
						<div className="genderAge">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label for="group1" class="form-label">Gender</label>
										<div class="input-group">
											<div class="input-group-text">
												<div>
													<input class="form-check-input" id="radio1" type="radio" value="yes1" name="group1" aria-label="Radio button for following text input" />
													<label for="radio1" class="form-label">Male</label>
												</div>
												<div>
													<input class="form-check-input" id="radio2" type="radio" value="yes2" name="group1" aria-label="Radio button for following text input" />
													<label for="radio2" class="form-label">Female</label>
												</div>
											</div>
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label for="age" class="form-label">Age</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control age_input" placeholder="26" id="name" aria-label="age" />
										</div>

									</div>
								</div>
							</div>
						</div>
						{/*Email and Number*/}
						<div className="email">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label for="name" class="form-label">Email</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" placeholder="Usman@gmail.com" id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label for="name" class="form-label">Phone number</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" placeholder="+998 93 123 45 67" id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>
					<div className="right col-xl-6">
						{/*language*/}
						<div className="language">
							<div className="title">
								<div className="img">
									<img src={edit} className="w-100" />
								</div>
								<p>language</p>
							</div>
							<div className="language_select">
								<div>
									<input type="radio" name="language" id="uzbek" value="uzbek" />
									<label for="uzbek">Uzbek</label>
								</div>
								<div>
									<input type="radio" name="language" id="russian" value="russian"  />
									<label for="russian">Russian</label>
								</div>
								<div>
									<input type="radio" name="language" id="english" value="english" />
									<label for="english">English</label>
								</div>
							</div>
						</div>
						{/*Password*/}
						<div className="password">
							<h4>Parolni o'zgartirish</h4>
							<input type="text" />
						</div>
					</div>
				</div>
				<div className="bg_image"></div>
			</div>
		</div>
	)
}