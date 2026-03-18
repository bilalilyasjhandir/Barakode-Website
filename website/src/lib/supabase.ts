import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// TypeScript types for the contact form
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  subject: string;
  message: string;
  submitted_at: string;
  created_at?: string;
}

// Contact form data type (for form input)
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

// TypeScript types for the hire requests
export interface HireRequest {
  id?: number;
  full_name: string;
  email_address: string;
  phone_number: string;
  company?: string | null;
  project_details: string;
  created_at?: string;
}

// TypeScript types for the plans
export interface Plan {
  id?: number;
  email: string;
  plan_type: string;
  hire_type?: string;
  created_at?: string;
}

// Contact form service
export class ContactService {
  /**
   * Submit contact form data to Supabase
   * @param formData - The contact form data
   * @returns Promise with the submission result
   */
  static async submitContactForm(formData: ContactFormData): Promise<{
    success: boolean;
    data?: ContactSubmission;
    error?: string;
  }> {
    try {
      // Validate required fields
      const requiredFields = ['name', 'email', 'subject', 'message'];
      for (const field of requiredFields) {
        if (!formData[field as keyof ContactFormData]?.trim()) {
          return {
            success: false,
            error: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
          };
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        };
      }

      // Prepare submission data
      const submissionData: Omit<ContactSubmission, 'id' | 'created_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        company: formData.company?.trim() || null,
        phone: formData.phone?.trim() || null,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        submitted_at: new Date().toISOString()
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: 'Failed to submit contact form. Please try again later.'
        };
      }

      return {
        success: true,
        data: data as ContactSubmission
      };

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Contact form submission error:', error);
      }
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      };
    }
  }

  /**
   * Get all contact submissions (for admin use)
   * @returns Promise with the submissions
   */
  static async getContactSubmissions(): Promise<{
    success: boolean;
    data?: ContactSubmission[];
    error?: string;
  }> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: 'Failed to fetch contact submissions'
        };
      }

      return {
        success: true,
        data: data as ContactSubmission[]
      };

    } catch (error) {
      console.error('Fetch submissions error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred'
      };
    }
  }

  /**
   * Delete a contact submission (for admin use)
   * @param id - The submission ID
   * @returns Promise with the deletion result
   */
  static async deleteContactSubmission(id: string): Promise<{
    success: boolean;
    error?: string;
  }> {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: 'Failed to delete contact submission'
        };
      }

      return {
        success: true
      };

    } catch (error) {
      console.error('Delete submission error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred'
      };
    }
  }

  /**
   * Submit hire request data to Supabase
   * @param formData - The hire request form data
   * @returns Promise with the submission result
   */
  static async submitHireRequest(formData: Omit<HireRequest, 'id' | 'created_at'>): Promise<{
    success: boolean;
    data?: HireRequest;
    error?: string;
  }> {
    try {
      // Validate required fields
      const requiredFields: (keyof HireRequest)[] = ['full_name', 'email_address', 'phone_number', 'project_details'];
      for (const field of requiredFields) {
        if (!formData[field]?.trim()) {
          return {
            success: false,
            error: `${field.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} is required`
          };
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email_address)) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        };
      }

      // Prepare submission data
      const submissionData: Omit<HireRequest, 'id' | 'created_at'> = {
        full_name: formData.full_name.trim(),
        email_address: formData.email_address.trim().toLowerCase(),
        phone_number: formData.phone_number.trim(),
        company: formData.company?.trim() || null,
        project_details: formData.project_details.trim()
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('hire_requests')
        .insert([submissionData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: 'Failed to submit hire request. Please try again later.'
        };
      }

      return {
        success: true,
        data: data as HireRequest
      };

    } catch (error) {
      console.error('Hire request submission error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      };
    }
  }

  /**
   * Submit plan selection with email to Supabase
   * @param email - The user's email
   * @param planType - The selected plan type
   * @param hireType - The type of developer being hired (optional)
   * @returns Promise with the submission result
   */
  static async submitPlanSelection(email: string, planType: string, hireType?: string): Promise<{
    success: boolean;
    data?: Plan;
    error?: string;
  }> {
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        };
      }

      // Validate plan type
      const validPlanTypes = ['Starter', 'Professional', 'Enterprise'];
      if (!validPlanTypes.includes(planType)) {
        return {
          success: false,
          error: 'Invalid plan type selected'
        };
      }

      // Prepare submission data
      const submissionData: Omit<Plan, 'id' | 'created_at'> = {
        email: email.trim().toLowerCase(),
        plan_type: planType,
        hire_type: hireType
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('plans')
        .insert([submissionData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: 'Failed to submit plan selection. Please try again later.'
        };
      }

      return {
        success: true,
        data: data as Plan
      };

    } catch (error) {
      console.error('Plan submission error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      };
    }
  }
}

export default ContactService;