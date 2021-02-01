import React, { useState } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { Paper, TextField, Typography, Grid } from "@material-ui/core";
import { MCIcon } from "loft-taxi-mui-theme";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Header from "./Header";
import {registerCard} from "./actions";

const Profile = ({registerCard}) => {
  const [formFields, setFormField] = useState({
    cardNumber: "",
    expiryDate: new Date(),
    cardName: "",
    cvc: "",
  });

  const onChange = (e) => {
    setFormField({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (date) => {
    setFormField({
      ...formFields,
      expiryDate: date,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    registerCard(formFields);
  };

  return (
    <div>
      <Header />
      <div className="profile" data-testid="profile">
        <div className="profile__container">
          <Paper className="profile__window">
            <div className="profile-title">
              <div className="profile-title__header">
                <Typography variant="h4">Профиль</Typography>
              </div>
              <div className="profile-title__subtext">
                <Typography variant="body1">Способ оплаты</Typography>
              </div>
            </div>
            <form onSubmit={submit}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container spacing={4} justify="center">
                    <Grid
                      item
                      xs={6}
                      style={{
                        width: "300px",
                        height: "189px",
                        position: "relative",
                        paddingTop: "16px",
                        paddingLeft: "32px",
                        paddingRight: "32px",
                        paddingBottom: "16px",
                      }}
                    >
                      <Paper elevation={4} className="profile-form__block">
                          <MCIcon style={{right: "40px", top: "15px"}} />
                        <div className="form__field">
                          <TextField
                            id="cardNumber"
                            label="Номер карты"
                            type="cardNumber"
                            fullWidth
                            placeholder="0000 0000 0000 0000"
                            name="cardNumber"
                            value={formFields.cardNumber}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="form__field">
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              name="expiryDate"
                              id="expiryDate"
                              value="formFields.expiryDate"
                              onChange={onChange}
                              openTo="year"
                              views={["year", "month"]}
                              format="MM/yy"
                              InputLabelProps={{ shrink: true }}
                              autoOk={true}
                              fullWidth
                              required
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{
                        width: "300px",
                        height: "189px",
                        position: "relative",
                        paddingTop: "16px",
                        paddingLeft: "32px",
                        paddingRight: "32px",
                        paddingBottom: "16px",
                      }}
                    >
                      <Paper elevation={4} className="profile-form__block">
                        <div className="form__field">
                          <TextField
                            id="cardName"
                            label="Имя владельца"
                            type="cardName"
                            fullWidth
                            name="cardName"
                            placeholder="USER NAME"
                            value={formFields.cardName}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="form__field">
                          <TextField
                            id="cvc"
                            label="CVC"
                            type="cvc"
                            fullWidth
                            name="cvc"
                            value={formFields.cvc}
                            onChange={onChange}
                            required
                          />
                        </div>
                      </Paper>
                    </Grid>
                    <div>
                      <button className="btn">
                        Сохранить
                      </button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  registerCard 
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
