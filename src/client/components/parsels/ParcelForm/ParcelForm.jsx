import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import styles from './ParcelForm.module.scss'


function ParcelForm({ action , id , handleClose}) {

    const dispatch = useDispatch()

    const {
        register,
        formState: {
            errors,
            isValid
        },
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit =  (data) => {
        if (id) {
             data = {...data, id}
         }
        dispatch(action(data))
        reset()
        handleClose()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Parcel info</h2>
            <label className={styles.inputLabel}>
                E-mail:
                <input className={styles.input}
                type='email'    
                    {...register('email', {
                        required: 'email is required',
                    })}
                />
                {errors?.email && <p className={styles.errorMessage}>{errors?.email?.message || 'Field is required' }</p> }
            </label>
            <label className={styles.inputLabel}>
                From:
                <input className={styles.input} 
                placeholder='City...'
                    {...register('fromCity', {
                        required: 'Field is required',
                    })}
                />
                {errors?.fromCity && <p className={styles.errorMessage}>{errors?.fromCity?.message || 'Field is required' }</p> }
            </label>
            <label className={styles.inputLabel}>
                To:
                <input  className={styles.input}
                placeholder='City...'
                    {...register('toCity', {
                        required: 'Field is required',
                    })}
                />
                {errors?.toCity && <p className={styles.errorMessage}>{errors?.toCity?.message || 'Field is required' }</p> }
            </label>

            <label className={styles.inputLabel}>
                Type of parcel:
                <select className={styles.select} {...register('type', {
                    required: true
                })} id="">
                    <option className={styles.options} value="clothes">Clothes</option>
                    <option className={styles.options} value="gadgets">Gadgets</option>
                    <option className={styles.options} value="medicine">Medicine</option>
                    <option className={styles.options} value="drinks">Drinks</option>
                    <option className={styles.options} value="other">Other...</option>
                </select>
            </label>
            <label className={styles.inputLabel}> 
                Date of dispatch
                <input className={styles.date} type="date" {...register('date', {
                    required:'Specify date of dispatch'
                })} />
                {errors?.date && <p className={styles.errorMessage}>{errors?.date?.message || 'Field is required' }</p> }
            </label>
            <label className={styles.inputLabel}>
                Description: 
                <textarea className={styles.textarea}
                    {...register('description')}    
                ></textarea>
            </label>
            <input className={styles.submitBtn} type="submit" disabled={!isValid} />
        </form>
  )
}


export default ParcelForm 