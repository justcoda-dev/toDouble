import Joi from 'joi';

export const emailSchema = Joi.string().email({ tlds: { allow: false } });
export const nameSchema = Joi.string().min(2).max(100).required();
export const phoneSchema = Joi.string()
  .regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
  .min(13)
  .max(13)
  .messages({
    'string.pattern.base': `Phone number must have 13 digits, and start with +380.`,
  })
  .required();
