import { Demodal, useModal } from 'demodal';
import { Loader2Icon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IRoot } from '@/types/IRoot';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export const SendMailModal = Demodal.create(({ root }: { root: IRoot }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Test mail');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const modal = useModal();

  useEffect(() => {
    modal.resolve({
      setLoading,
      close: modal.close,
    });
  }, [modal]);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/test/send-mail', {
        method: 'POST',
        body: JSON.stringify({ to: email, subject: subject, data: root, apiKey }),
      }).then((res) => res.json());
      if (response.error) {
        throw new Error(response.error?.message || 'Mail sending failed');
      }
      toast.success('Mail sent successfully');
    } catch (error) {
      console.log('error', error);
      toast.error((error as Error).message || 'Mail sending failed', {
        duration: 20_000,
      });
    } finally {
      setLoading(false);
    }
  };

  const isValid = useMemo(() => {
    return email && subject;
  }, [email, subject]);
  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.close}>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Send mail</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid min-w-64 gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Label htmlFor="apiKey">Resend API Key</Label>
          <Input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="text-muted-foreground text-sm">
            Resend API Key is used to send emails. You can get it from{' '}
            <a
              className="text-primary underline"
              href="https://resend.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>
          </p>
          <blockquote className="text-muted-foreground mt-6 border-l-2 pl-6 text-sm italic">
            No credit card required to create an API key. You can only use your own email address to
            send an email for free accounts
          </blockquote>
          <blockquote className="text-muted-foreground mt-6 border-l-2 pl-6 text-sm italic">
            We will try to use Resend API key from env if it is provided.
          </blockquote>
          <br />
          <Button onClick={() => onClick()} disabled={!isValid || loading}>
            {loading && <Loader2Icon className="animate-spin" />}
            Send
          </Button>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export const openSendMailModal = (root: IRoot) => Demodal.open(SendMailModal, { root });
